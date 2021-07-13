import React, { useEffect, useRef } from "react";
import { Input, Card, Col, Row } from "antd";
import { initialize } from "../../redux/actionCreator";
import { elementDrop } from "../../redux/actionCreator";
import { createGroups } from "../../redux/actionCreator";


import { useDispatch, useSelector } from "react-redux";

function LandingPage() {
  const dispatch = useDispatch();
  const inputHandler = (value) => {
    dispatch(initialize(value));
  };

  const puzzle = useSelector((state) => state.puzzle);

  useEffect(() => {
    var temporary = [];
    if (puzzle.userInput) {
      var tempPieces = [].concat(puzzle.pieces);
      while (tempPieces.length > 0) {
        temporary.push(tempPieces.splice(0, puzzle.userInput));
      }
      dispatch(createGroups(temporary));
    }
  }, [puzzle.userInput, puzzle.pieces]);
  

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
      <Row>
        <Col span={10} offset={7}>
          <Input
            style={{ marginTop: "40" }}
            onPressEnter={(value) => inputHandler(value)}
            placeholder="Enter a number and press enter!"
          />
        </Col>
      </Row>

      <div id="puzzle__div" style={{ marginLeft: 500 }}>
        {puzzle.groups.length
          ? puzzle.groups.map((group) => {
              return (
                <Row>
                  {console.log(puzzle.groups)}

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
