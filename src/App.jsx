import React from "react";
import { Graph } from "react-d3-graph";

const App = () => {
  const customData = {
    nodes: [
      { id: "server1(paris)", color: "#3e6257" },
      { id: "server2(Capetown)",  color: "pink"},
      { id: "router1(67.166.214.148)", color: "blue" },
      { id: "laptop1(abc)",  color: "purple"},
      { id: "gateway(172.20.121.41)", color: "cyan" },
    ],
    links: [
      { source: "server1(paris)", target: "router1(67.166.214.148)", label: "192.168.1.50" },
      { source: "server2(Capetown)", target: "router1(67.166.214.148)", label: "192.168.2.50" },
      { source: "laptop1(abc)", target: "router1(67.166.214.148)", label: "67.166.214.148" },
      {source: "router1(67.166.214.148)", target: "gateway(172.20.121.41)", label: "192.168.1.98" },
      { source: "laptop1(abc)", target: "server1(paris)" },
    ],
    focusedNodeId: "nodeIdToTriggerZoomAnimation",
  };

  const myConfig = {
    nodeHighlightBehavior: true,
    linkHighlightBehavior: true,
    collapsible: true,
    directed: true,
    d3: {
      linkLength: 180,
    },
    node: {
      color: "lightgreen",
      highlightFontWeight: "bold",
      fontSize: 9,
      size: 160,
      fontWeight: 10,
      highlightStrokeColor: "#d1001c",
      highlightFontSize: 10,
    },
    link: {
      highlightColor: "#d1001c",
      renderLabel: true,
      highlightFontSize: 12,
      highlightFontWeight: "bold",
      fontColor: "black",
      fontSize: 8,
    },
  };

  // const onClickNode = function (nodeId) {
  //   window.alert(`Clicked node ${nodeId}`);
  // };

  // const onMouseOverNode = function (nodeId) {
  //   window.alert(`Mouse over node ${nodeId}`);
  // };

  // const onMouseOutNode = function (nodeId) {
  //   window.alert(`Mouse out node ${nodeId}`);
  // };

  // const onClickLink = function (source, target) {
  //   window.alert(`Clicked link between ${source} and ${target}`);
  // };

  // const onMouseOverLink = function (source, target) {
  //   window.alert(`Mouse over in link between ${source} and ${target}`);
  // };

  // const onMouseOutLink = function (source, target) {
  //   window.alert(`Mouse out link between ${source} and ${target}`);
  // };

  // return (
  //   <Graph
  //     id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
  //     data={customData}
  //     config={myConfig}
  //     onClickNode={onClickNode}
  //     onClickLink={onClickLink}
  //     onMouseOverNode={onMouseOverNode}
  //     onMouseOutNode={onMouseOutNode}
  //     onMouseOverLink={onMouseOverLink}
  //     onMouseOutLink={onMouseOutLink}
  //   />
  // );

  return (
    <Graph
      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
      data={customData}
      config={myConfig}
    />
  );
};

export default App;
