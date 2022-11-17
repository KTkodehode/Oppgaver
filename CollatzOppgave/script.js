const collatzConjecture = (number) => {
    let n = number;
    let arr = [n];
  
    const sequence = () => {
      if (n === 1 || n < 1) {
        return;
      }
      if (n % 2) {
        n = n * 3 + 1;
        arr.push(n);
        return sequence(n);
      }
      n = n / 2;
      arr.push(n);
      return sequence(n);
    };
  
    sequence(number);
    return arr;
  };
  
  const input = document.querySelector("[data-number]");
  const button = document.querySelector("[data-button]");
  const message = document.querySelector("[data-message]");
  const display = document.querySelector("[data-display]");
  
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const numbers = collatzConjecture(+input.value).map((n) => `<li>${n}</li>`);
    display.innerHTML = numbers.join("");
    message.innerText = `It took ${numbers.length - 1} steps for ${
      input.value
    } to reach 1.`;
  });
  