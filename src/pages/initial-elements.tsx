import type { Node, Edge } from '@xyflow/react';
import { MarkerType } from '@xyflow/react';

export const nodes: Node[] = [
  { id: '1',
    type: 'custom',
    data: { label: '컴퓨터 프로그래밍 I', preRequisite: [], postRequisite: ['컴퓨터 프로그래밍 II', '자료구조'] },
    position: { x: -200, y: 0 },
  },
  {
    id: '2',
    type: 'custom',
    data: { label: '컴퓨터 프로그래밍 II', preRequisite: ['컴퓨터 프로그래밍 I'], postRequisite: ['자료구조'] },
    position: { x: 0, y: 0 },
  },
  {
    id: '3',
    type: 'custom',
    data: { label: '자료구조',  preRequisite: ['컴퓨터 프로그래밍 I', '컴퓨터 프로그래밍 II'], postRequisite: ['알고리즘'] },
    position: { x: 200, y: 0 },
  },
  {
    id: '4',
    type: 'custom',
    data: { label: '알고리즘', preRequisite: ['컴퓨터프로그래밍I', '컴퓨터프로그래밍II', '자료구조'], postRequisite: [] },
    position: { x: 400, y: 0 },
  },
  {
    id: '5',
    type: 'custom',
    data: { label: '전산수학I', preRequisite: [], postRequisite: ['전산수학II'] },
    position: { x: -200, y: 100 },
  },
  {
    id: '6',
    type: 'custom',
    data: { label: '전산수학II', preRequisite: ['전산수학I'], postRequisite: [] },
    position: { x: 0, y: 100 },
  },
];

export const edges: Edge[] = [
  { id: 'e12', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e23', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e34', source: '3', target: '4', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e56', source: '5', target: '6', markerEnd: { type: MarkerType.ArrowClosed } },
];