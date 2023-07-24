const messageComponents = require("./message-components");

const generateMessaje = () => {
  const part1 =
    messageComponents.part1[
      Math.floor(Math.random() * messageComponents.part1.length)
    ];
  const part2 =
    messageComponents.part2[
      Math.floor(Math.random() * messageComponents.part2.length)
    ];
  const part3 =
    messageComponents.part3[
      Math.floor(Math.random() * messageComponents.part3.length)
    ];
  return `${part1} ${part2} ${part3}`;
};
console.log(generateMessaje());
