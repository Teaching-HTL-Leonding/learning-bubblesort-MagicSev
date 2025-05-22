let numbers = [6, 4, 6, 8, 3, 7, 2, 1];
let names = ['tom','bruce','adam', 'zoe', 'clara']
console.log(namesSort(names))
console.log(bubbleSort(numbers));

function bubbleSort(numbers: number[]): number[] {
  let swapped: boolean;
  let numberOfSortedElements = 0;

  do {
    swapped = false;
    for (let i = 0; i < numbers.length - numberOfSortedElements; i++) {
      const j = i + 1;

      if (numbers[j] < numbers[i]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
        swapped = true;
      }
    }

    numberOfSortedElements++;
  } while (swapped);

  return numbers;
}

function namesSort(numbers: string[]): string[] {
  let swapped: boolean;
  let numberOfSortedElements = 0;

  do {
    swapped = false;
    for (let i = 0; i < numbers.length - numberOfSortedElements; i++) {
      const j = i + 1;

      if (numbers[j] < numbers[i]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
        swapped = true;
      }
    }

    numberOfSortedElements++;
  } while (swapped);

  return numbers;
}
