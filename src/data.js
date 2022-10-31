const List = {
  list: [
    [
      {
        id: 1,
        title: "Read some news",
      },
      {
        id: 2,
        title: "boubou",
      },
    ],
    [
      {
        id: 2,
        title: "salut",
      },

      {
        id: 3,
        title: "azeaz",
      },
    ],
  ],
  getList: function () {
    return (
      (localStorage.getItem("theList") &&
        JSON.parse(localStorage.getItem("theList"))) ||
      this.list
    );
  },
  saveList: (list) => {
    localStorage.setItem("theList", JSON.stringify(list));
  },
};

export default List;
