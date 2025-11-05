import { useState, useCallback } from 'react'
import { Background, BackgroundVariant,
  Controls, MiniMap,
  ReactFlow, addEdge, applyNodeChanges, applyEdgeChanges,
  type Node, type Edge, type FitViewOptions,
  type OnConnect, type OnNodesChange,
  type OnEdgesChange, type OnNodeDrag, type DefaultEdgeOptions,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'

import {
  nodes as initialNodes,
  edges as initialEdges,
} from './initial-elements'

import CustomNode from './customNode-cs'

const nodeTypes = { custom: CustomNode };

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};
 
const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};
 
const onNodeDrag: OnNodeDrag = (_, node) => {
  console.log('drag event', node.data);
};

function DiagramCS() {

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
 
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [setNodes],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [setEdges],
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edgesSnapshot) => addEdge(connection, edgesSnapshot)),
    [setEdges],
  );

  return (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDrag={onNodeDrag}
          fitView
          fitViewOptions={fitViewOptions}
          defaultEdgeOptions={defaultEdgeOptions}
        >
          <Controls />
          <MiniMap nodeStrokeWidth={3} zoomable pannable />
          <Background color="#ccc" variant={BackgroundVariant.Dots} />
        </ReactFlow>
      );
}

export default DiagramCS