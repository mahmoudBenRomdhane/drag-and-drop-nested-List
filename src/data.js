const List = {
  list: [
    {
      list: [
        {
          id: 1,
          title: "testss",
        },
        {
          id: 2,
          title: "boubou",
        },
      ],
      title: "step",
      id: 1,
    },
    {
      list: [
        {
          id: 2,
          title: "salut",
        },

        {
          id: 3,
          title: "azeaz",
        },
      ],
      id: 2,
      title: "step 2",
    },
    {
      list: [
        {
          id: 2,
          title: "salut",
        },

        {
          id: 3,
          title: "azeaz",
        },
      ],
      id: 3,
      title: "step 22",
    },
    {
      list: [
        {
          id: 2,
          title: "salut",
        },

        {
          id: 3,
          title: "azeaz",
        },
      ],
      id: 4,
      title: "stepss",
    },
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
