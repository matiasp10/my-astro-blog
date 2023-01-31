import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
} from '@codesandbox/sandpack-react';

import { monokaiPro } from '@codesandbox/sandpack-themes';

const CodeSandpack = ({ code }) => (
  <SandpackProvider
    template="vanilla"
    theme={monokaiPro}
    files={{
      '/src/index.js': code,
    }}
  >
    <SandpackLayout>
      <SandpackCodeEditor
        options={{
          showLineNumbers: true,
        }}
      />
    </SandpackLayout>
  </SandpackProvider>
);

export default CodeSandpack;
