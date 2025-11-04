import { useState, useCallback } from 'react'
import { Background, BackgroundVariant,
  Controls, MiniMap, Position, MarkerType,
  ReactFlow, addEdge, applyNodeChanges, applyEdgeChanges,
  type Node, type Edge, type FitViewOptions,
  type OnConnect, type OnNodesChange,
  type OnEdgesChange, type OnNodeDrag, type DefaultEdgeOptions,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initialNodes: Node[] = [
  { id: '1',
    type: 'input',
    data: { label: '컴퓨터 프로그래밍 I' },
    position: { x: -200, y: 0 },
    sourcePosition: Position.Right,
    style: { backgroundColor: '#f1f1f1', color: 'black' },
  },
  {
    id: '2',
    data: { label: '컴퓨터 프로그래밍 II' },
    position: { x: 0, y: 0 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { backgroundColor: '#f1f1f1', color: 'black' },
  },
  {
    id: '3',
    data: { label: '자료구조' },
    position: { x: 200, y: 0 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { backgroundColor: '#f1f1f1', color: 'black' },
  },
  {
    id: '4',
    data: { label: '알고리즘' },
    position: { x: 400, y: 0 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { backgroundColor: '#f1f1f1', color: 'black' },
  },
  {
    id: '5',
    type: 'input',
    data: { label: '전산수학I' },
    position: { x: -200, y: 100 },
    sourcePosition: Position.Right,
    style: { backgroundColor: '#f1f1f1', color: 'black' },
  },
  {
    id: '6',
    data: { label: '전산수학II' },
    position: { x: 0, y: 100 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { backgroundColor: '#f1f1f1', color: 'black' },
  },
];

const initialEdges: Edge[] = [
  { id: 'e12', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e23', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e34', source: '3', target: '4', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e56', source: '5', target: '6', markerEnd: { type: MarkerType.ArrowClosed } },
];

const nodeColor = (node: Node) => {
  return '#f1f1f1';
};
 
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
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDrag={onNodeDrag}
          fitView
          fitViewOptions={fitViewOptions}
          defaultEdgeOptions={defaultEdgeOptions}
        >
          <Controls />
          <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
          <Background color="#ccc" variant={BackgroundVariant.Dots} />
        </ReactFlow>
      );
}

export default DiagramCS