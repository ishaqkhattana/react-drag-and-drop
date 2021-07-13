import React, { useEffect, useRef } from "react";
import { Input, Col, Row } from "antd";
import {
  initialize,
  elementDrop,
  createGroups,
} from "../../redux/puzzle/actionCreator";

import { useDispatch, useSelector } from "react-redux";

function LandingPage() {
  const dispatch = useDispatch();
  const inputHandler = (value) => {
    dispatch(initialize(value));
  };

  const puzzle = useSelector((state) => state.puzzle);

  useEffect(() => {
    var temporary = [];
    //Splitting the 1D puzzle board into array of arrays wherein each array is a row, then dispatching to redux
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
      <Row style={{ marginTop: 200 }}>
        <Col span={10} offset={7}>
          <Input
            style={{ marginTop: "40" }}
            onPressEnter={(value) => inputHandler(value)}
            placeholder="Enter a number and press enter!"
          />
        </Col>
      </Row>

      <div
        id="puzzle__div"
        style={{
          marginTop: 50,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "30%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Rendered ONLY IF groups are made which means user has given an input, otherwise only input bar rendered */}
        {puzzle.groups.length
          ? puzzle.groups.map((group) => {
              return (
                <Row justify={"center"}>
                  {group.map((element) => (
                    <Col
                      draggable
                      onDragOver={(e) => e.preventDefault()}
                      onDragStart={(e) => handleDragStart(e, element)}
                      onDrop={(e) => handleDrop(e, element)}
                      class="puzzle__cell"
                      style={{
                        padding: 20,
                        margin: 10,
                        background: "rgb(182,180,168)",
                        background: "linear-gradient(90deg, rgba(182,180,168,1) 0%, rgba(145,145,141,1) 100%)",
                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
                      }}
                    >
                      <p style = {{fontSize: '20px'}}>{element}</p>
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
