import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./data";

function App() {
  const list = List.getList();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <div className="cards">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <>
              {list.map((item, i) => (
                <DragDropContext
                  onDragEnd={(param) => {
                    const srcI = param.source.index;
                    const desI = param.destination?.index;
                    if (desI !== null) {
                      item.splice(desI, 0, item.splice(srcI, 1)[0]);
                      List.saveList(list);
                    }
                  }}
                >
                  <div className="card">
                    <div className="title-wrapper">
                      <div className="hamburger">
                        <div className="ham"></div>
                        <div className="ham"></div>
                        <div className="ham"></div>
                      </div>
                      <div className="title-content">Step</div>
                    </div>

                    <Droppable droppableId="droppable-1">
                      {(provided, _) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          <div className="mini-cards">
                            {item.map((item, i) => (
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
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="line"></div>
                    <i class="arrow down"></i>
                  </div>
                </DragDropContext>
              ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*
                <div className="mini-card">
                  <div className="mini-title-wrapper">
                    <div className="hamburger">
                      <div className="ham"></div>
                      <div className="ham"></div>
                      <div className="ham"></div>
                    </div>
                    <div className="mini-title-content">Child 1</div>
                  </div>
                </div>
*/
