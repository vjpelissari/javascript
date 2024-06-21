// IIFE => Immedeatelty Invoked Function Expression
((lenght, width) => {
    const area = lenght * width;
    const output = `The area of a retangle with a lenght of ${lenght} and a width of ${width} is ${area}`
    console.log(output);
}) (10, 5)