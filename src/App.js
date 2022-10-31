import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./data";
import Item from "./item";

function App() {
  const list = List.getList();
  console.log("data", list);
  return (
    <>
      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          if (desI !== null) {
            list.splice(desI, 0, list.splice(srcI, 1)[0]);
            List.saveList(list);
          }
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className="cards">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {list.map((item, i) => (
                      <Draggable
                        key={item.id}
                        draggableId={"draggable-" + item.id}
                        index={i}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={{
                              ...provided.draggableProps.style,
                              boxShadow: snapshot.isDragging
                                ? "0 0 .4rem #666"
                                : "none",
                            }}
                            {...provided.dragHandleProps}
                          >
                            <Item list={item} index={i} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
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
