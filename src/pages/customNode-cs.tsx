import { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import type { Node, NodeProps } from '@xyflow/react'

import './customNode.css'

type InfoNode = Node<{ label: string, preRequisite: string[], postRequisite: string[] }, 'info'>;

function CustomNode({ data }: NodeProps<InfoNode>) {

    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => { setShowTooltip(true); };
    const handleMouseLeave = () => { setShowTooltip(false); };
    const handleClick = () => { ;};

    const preReqs = data.preRequisite.map((req, index) => { return <li key={index}>{req}</li>; });
    const postReqs = data.postRequisite.map((req, index) => { return <li key={index}>{req}</li>; });

    return (
      <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}
           style= {{ width: '150px', display: 'flex',
                     justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                     borderRadius: '8px', padding: '10px', fontSize: '12px',
                     border: '1px solid #333', backgroundColor: '#f1f1f1', color: 'black' }}>
        <div>{data.label}</div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
        {showTooltip && (<div className="tooltip-box">
                           <h3>추천 선이수 과목</h3>
                           <ul>{preReqs}</ul>
                           <h3>추천 후이수 과목</h3>
                           <ul>{postReqs}</ul>
                         </div>)}
      </>
    );
}

export default CustomNode