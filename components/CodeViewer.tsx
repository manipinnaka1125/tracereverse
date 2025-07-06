"use client";
import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardDocumentIcon, 
  CheckIcon, 
  EyeIcon, 
  EyeSlashIcon,
  FolderOpenIcon,
  DocumentTextIcon,
  ChevronRightIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useToast } from './Toast';

interface CodeFile {
  name: string;
  content: string;
  language: string;
  path?: string;
}

interface CodeViewerProps {
  files: CodeFile[];
  defaultFile?: string;
  className?: string;
}

const FileTree = ({ files, currentFile, onFileSelect }: {
  files: CodeFile[];
  currentFile: string;
  onFileSelect: (file: string) => void;
}) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root']));
  
  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folder)) {
        newSet.delete(folder);
      } else {
        newSet.add(folder);
      }
      return newSet;
    });
  };

  const organizeFiles = (files: CodeFile[]) => {
    const tree: any = {};
    
    files.forEach(file => {
      const parts = (file.path || file.name).split('/');
      let current = tree;
      
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) {
          current[part] = { type: 'folder', children: {} };
        }
        current = current[part].children;
      }
      
      const fileName = parts[parts.length - 1];
      current[fileName] = { type: 'file', file };
    });
    
    return tree;
  };

  const renderTree = (node: any, path: string = '', depth: number = 0) => {
    return Object.entries(node).map(([name, item]: [string, any]) => {
      const fullPath = path ? `${path}/${name}` : name;
      
      if (item.type === 'folder') {
        const isExpanded = expandedFolders.has(fullPath);
        return (
          <div key={fullPath}>
            <button
              onClick={() => toggleFolder(fullPath)}
              className="flex items-center gap-2 w-full text-left p-1 hover:bg-muted rounded text-sm"
              style={{ paddingLeft: `${depth * 12 + 8}px` }}
            >
              {isExpanded ? (
                <ChevronDownIcon className="w-3 h-3" />
              ) : (
                <ChevronRightIcon className="w-3 h-3" />
              )}
              <FolderOpenIcon className="w-4 h-4 text-blue-500" />
              <span>{name}</span>
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  {renderTree(item.children, fullPath, depth + 1)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      } else {
        const isSelected = currentFile === item.file.name;
        return (
          <button
            key={fullPath}
            onClick={() => onFileSelect(item.file.name)}
            className={`flex items-center gap-2 w-full text-left p-1 rounded text-sm transition-colors ${
              isSelected ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
            }`}
            style={{ paddingLeft: `${depth * 12 + 24}px` }}
          >
            <DocumentTextIcon className="w-4 h-4" />
            <span>{name}</span>
          </button>
        );
      }
    });
  };

  const tree = organizeFiles(files);
  
  return (
    <div className="bg-muted/50 border-r border-border p-2 min-w-[200px] max-h-[500px] overflow-y-auto">
      <h3 className="font-semibold text-sm mb-2 px-1">Files</h3>
      {renderTree(tree)}
    </div>
  );
};

export const CodeViewer = ({ files, defaultFile, className }: CodeViewerProps) => {
  const [currentFile, setCurrentFile] = useState(defaultFile || files[0]?.name || '');
  const [copied, setCopied] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const { theme } = useTheme();
  const { showToast } = useToast();

  const file = files.find(f => f.name === currentFile) || files[0];

  const copyToClipboard = async () => {
    if (!file) return;
    
    try {
      await navigator.clipboard.writeText(file.content);
      setCopied(true);
      showToast('Copied!', 'Code copied to clipboard', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast('Error', 'Failed to copy code', 'error');
    }
  };

  if (!file) {
    return (
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <DocumentTextIcon className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
        <p className="text-muted-foreground">No files to display</p>
      </div>
    );
  }

  return (
    <div className={`bg-background border border-border rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-muted/50 px-4 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          <DocumentTextIcon className="w-4 h-4" />
          <span className="font-medium text-sm">{file.name}</span>
          <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">
            {file.language}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowLineNumbers(!showLineNumbers)}
            className="p-1 rounded hover:bg-muted transition-colors"
            title={showLineNumbers ? 'Hide line numbers' : 'Show line numbers'}
          >
            {showLineNumbers ? (
              <EyeSlashIcon className="w-4 h-4" />
            ) : (
              <EyeIcon className="w-4 h-4" />
            )}
          </button>
          
          <button
            onClick={copyToClipboard}
            className="p-1 rounded hover:bg-muted transition-colors"
            title="Copy code"
          >
            {copied ? (
              <CheckIcon className="w-4 h-4 text-green-500" />
            ) : (
              <ClipboardDocumentIcon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* File tree (if multiple files) */}
        {files.length > 1 && (
          <FileTree 
            files={files}
            currentFile={currentFile}
            onFileSelect={setCurrentFile}
          />
        )}

        {/* Code content */}
        <div className="flex-1 overflow-auto">
          <SyntaxHighlighter
            language={file.language}
            style={theme === 'dark' ? vscDarkPlus : vs}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              background: 'transparent',
              padding: '1rem',
              fontSize: '14px',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
            }}
            codeTagProps={{
              style: {
                fontFamily: 'inherit'
              }
            }}
          >
            {file.content}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

// Example usage component
export const CodeExample = ({ title, description, files }: {
  title: string;
  description?: string;
  files: CodeFile[];
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      <CodeViewer files={files} />
    </div>
  );
};
