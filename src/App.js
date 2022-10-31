import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./data";
import Item from "./item";

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
            {list.map((item, i) => (
              <Item list={item.list} />
            ))}
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
