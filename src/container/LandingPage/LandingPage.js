import React, { useEffect, useRef } from "react";
import { Input, Card, Col, Row } from "antd";
import { initialize } from "../../redux/actionCreator";
import { elementDrop } from "../../redux/actionCreator";

import { useDispatch, useSelector } from "react-redux";

function LandingPage() {
  const dispatch = useDispatch();
  const inputHandler = (value) => {
    dispatch(initialize(value));
  };

  const puzzle = useSelector((state) => state.puzzle);

  if (puzzle.userInput) {
    var tempPieces = [].concat(puzzle.pieces);
    while (tempPieces.length > 0) {
      puzzle.groups.push(tempPieces.splice(0, puzzle.userInput));
    }
  }

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData("text/plain", element);
  };

  const handleDrop = (e, element) => {
    e.preventDefault();
    var draggedObject = e.dataTransfer.getData("text");
    dispatch(
      elementDrop({
        firstVal: draggedObject,
        secondVal: element.toString(),
      })
    );
  };

  return (
    <div>
      <Input
        onPressEnter={(value) => inputHandler(value)}
        placeholder="Enter a number and press enter!"
      />
      <div id="puzzle__div" style={{ marginLeft: 500 }}>
        {puzzle.groups.length
          ? puzzle.groups.map((group) => {
              return (
                <Row>
                  {group.map((element) => (
                    <Col
                      draggable
                      onDragOver={(e) => e.preventDefault()}
                      onDragStart={(e) => handleDragStart(e, element)}
                      onDrop={(e) => handleDrop(e, element)}
                      style={{ padding: 20 }}
                    >
                      {element}
                    </Col>
                  ))}
                </Row>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default LandingPage;
