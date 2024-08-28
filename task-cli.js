import { readFileSync, writeFileSync } from "fs";

const add = function (string) {
  const datetime = new Date();
  const data = getDataFromFile();
  const dataLength = Object.keys(data).length;
  data[dataLength] = {
    id: dataLength,
    description: string,
    status: "todo",
    createdAt: datetime.toLocaleString("en-US"),
    updatedAt: datetime.toLocaleString("en-US"),
  };
  writeDataToFile(data);
};

const update = function (id, string) {
  const datetime = new Date();
  const data = getDataFromFile();
  data[id].updatedAt = datetime.toLocaleString("en-US");
  data[id].description = string;
  writeDataToFile(data);
};

const deleteEntry = function (id) {
  const data = getDataFromFile();
  delete data[id];
  writeDataToFile(data);
};

const markInProgress = function (id) {
  const datetime = new Date();
  const data = getDataFromFile();
  data[id].updatedAt = datetime.toLocaleString("en-US");
  data[id].status = "in-progress";
  writeDataToFile(data);
};

const markDone = function (id) {
  const datetime = new Date();
  const data = getDataFromFile();
  data[id].updatedAt = datetime.toLocaleString("en-US");
  data[id].status = "done";
  writeDataToFile(data);
};

const list = function (status) {
  const data = getDataFromFile();
  Object.values(data).forEach((element) => {
    if (status == "all") {
      console.log(
        `
        Task ID: ${element.id}\n
        Description: ${element.description}\n
        Status: ${element.status}\n
        Created: ${element.createdAt}\n
        Updated: ${element.updatedAt}\n
        `,
      );
    } else {
      if (element.status == status) {
        console.log(
          `
          Task ID: ${element.id}\n
          Description: ${element.description}\n
          Status: ${element.status}\n
          Created: ${element.createdAt}\n
          Updated: ${element.updatedAt}\n
          `,
        );
      }
    }
  });
};

const getDataFromFile = function () {
  let string = readFileSync("C:/Users/alexe/Dev/Personal/task-cli/tasks", {
    encoding: "utf8",
    flag: "r",
  });
  const json = JSON.parse(string);
  return json;
};

const writeDataToFile = function (data) {
  const dataString = JSON.stringify(data);
  writeFileSync("C:/Users/alexe/Dev/Personal/task-cli/tasks", dataString, {
    encoding: "utf8",
  });
};

const controller = function () {
  const argLength = process.argv.length;
  const command = process.argv[2].toLowerCase();
  const arg2 = process.argv[3];
  const arg3 = process.argv[4];
  const arg4 = process.argv[5];
  switch (command) {
    case "add":
      add(arg2);
      break;
    case "update":
      update(arg2, arg3, arg4);
      break;
    case "delete":
      deleteEntry(arg2);
      break;
    case "mark-in-progress":
      markInProgress(arg2);
      break;
    case "mark-done":
      markDone(arg2);
      break;
    case "list":
      switch (arg2) {
        case "done":
          list("done");
          break;
        case "todo":
          list("todo");
          break;
        case "in-progress":
          list("in-progress");
          break;
        default:
          list("all");
          break;
      }
      break;
    default:
      console.log("Incorrect entry");
      break;
  }
};

controller();
