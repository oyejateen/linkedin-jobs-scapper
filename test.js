const linkedIn = require("./index");

const queryOptions = {
  keyword: "",
  location: "India",
  dateSincePosted: "past Week",
  jobType: "full time",
  remoteFilter: "remote",
  salary: "1000",
  experienceLevel: "entry level",
  limit: "1",
  sortBy: "recent",
  page: "1",
};

linkedIn.query(queryOptions).then((response) => {
  console.log(response); // naukri response
});
