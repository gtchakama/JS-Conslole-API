document.querySelector("#log").addEventListener("click", () => {
  console.log("Hello, Stranger 🐱‍💻");
});

document.querySelector("#warning").addEventListener("click", logWarning);

function logWarning() {
  myWarning();
}

function myWarning() {
  console.warn("Please get vaccinated 😉");
}

document.querySelector("#error").addEventListener("click", () => {
  console.error(`I'm sorry, its just that ... I don't wanna loose you too 😪`);
});

document.querySelector("#table").addEventListener("click", () => {
  console.table([
    {
      Name: "George",
      Experiance: "6yrs",
      Mobile: "❎",
      Web: "✅",
    },
    {
      Name: "Leeroy",
      Experiance: "3yrs",
      Mobile: "✅",
      Web: "❎",
      Status: "Available",
    },
    {
      Name: "Aisha",
      Experiance: "2yrs",
      Mobile: "✅",
      Web: "✅",
    },
  ]);
});

document.querySelector("#group").addEventListener("click", () => {
  const label = "Top 5 Languages I've Used.";
  console.group(label);
  console.info("JavaScript");
  console.info("PHP");
  console.info("C#");
  console.info("C");
  console.groupEnd(label);
});

document.querySelector("#custom").addEventListener("click", () => {
  const spacing = "10px";
  const styles = `padding: ${spacing}; background-color: grey; color: white; font-style: 
         italic; border: 5px solid tomato; font-size: 2em;`;
  console.log("%cThis was Fun, don't forget to subscribe", styles);
});
