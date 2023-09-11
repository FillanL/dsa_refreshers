// runTests.ts

import { readdirSync, lstatSync } from 'fs';
import path from 'path';
import { test, describe, expect, run } from "./main";

const runTestsInDirectory = (directoryPath: string): void => {
  const files = readdirSync(directoryPath);
  
  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    const fileStats = lstatSync(filePath);

    if (fileStats.isFile() && file.endsWith('.test.ts')) {
      const testsModule = require(filePath);
      
      if (testsModule && typeof testsModule === 'function') {
        testsModule();
      }
    }
  });
};

const currentDirectory = process.cwd();
runTestsInDirectory(currentDirectory);
