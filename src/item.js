import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./data";

import React from "react";

function item(props) {
  const list = List.getList();
  return (
    <>
      <div className="card">
        <div className="title-wrapper">
          <div className="hamburger">
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
          </div>
          <div className="title-content">Step</div>
        </div>
        <DragDropContext
          onDragEnd={(param) => {
            const srcI = param.source.index;
            const desI = param.destination?.index;
            if (desI !== null) {
              props.list.splice(desI, 0, props.list.splice(srcI, 1)[0]);
              List.saveList(list);
            }
          }}
        >
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className="mini-cards">
                  {props.list.map((item, i) => (
                    <Draggable
                      key={item.id}
                      draggableId={"draggable-" + item.id}
                      index={i}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="mini-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          style={{
                            ...provided.draggableProps.style,
                            boxShadow: snapshot.isDragging
                              ? "0 0 .4rem #666"
                              : "none",
                          }}
                        >
                          <div className="mini-title-wrapper">
                            <div
                              className="hamburger"
                              {...provided.dragHandleProps}
                            >
                              <div className="ham"></div>
                              <div className="ham"></div>
                              <div className="ham"></div>
                            </div>
                            <div className="mini-title-content">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="line"></div>
        <i class="arrow down"></i>
      </div>
    </>
  );
}

export default item;
