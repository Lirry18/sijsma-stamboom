import React from "react";
import ReactFamilyTree from "react-family-tree";
import nodes from "./data.json";
import PinchZoomPan from "pinch-zoom-pan";
import FamilyNode from "./FamilyNode";
import styles from "./App.module.css";

import "./styles.css";

const myID = "0";
const WIDTH = 260;
const HEIGHT = 280;

export default function App() {
  const [rootId, setRootId] = React.useState(myID);
  //const onResetClick = React.useCallback(() => setRootId(myID), []);

  return (

        <PinchZoomPan
          captureWheel
          min={0.2}
          max={2.5}
          className={styles.wrapper}
          key={rootId}
        >
          <ReactFamilyTree
            nodes={nodes}
            rootId={rootId}
            width={WIDTH}
            height={HEIGHT}
            canvasClassName={styles.tree}
            renderNode={node => (
              <FamilyNode
                key={node.id}
                node={node}
                isRoot={node.id === rootId}
                onSubClick={setRootId}
                style={{
                  width: WIDTH,
                  height: HEIGHT,
                  transform: `translate(${node.left *
                    (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`
                }}
              />
            )}
          />
        </PinchZoomPan>
  );
}
