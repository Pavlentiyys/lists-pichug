import FileReader  from './fileReader.js';
import CircularList from './circularList.js';
import DoublyList from './doublyList.js';
import XORList from './xorList.js';

// Чтение чисел из файла
const numbers = FileReader.readFile('./src/data.txt');
console.log('Числа из файла:', numbers);

if (numbers.length === 0) {
    console.log('Нет данных для работы');
    process.exit(1);
}

// Кольцевой список
console.log('\n1. КОЛЬЦЕВОЙ СПИСОК:');
const circular = new CircularList();
numbers.forEach(n => circular.add(n));
circular.display();
console.log('Массив:', circular.toArray());

// Двусвязный список
console.log('\n2. ДВУСВЯЗНЫЙ СПИСОК:');
const doubly = new DoublyList();
numbers.forEach(n => doubly.add(n));
doubly.display();
doubly.displayBackwards();
console.log('Массив:', doubly.toArray());

// XOR список
console.log('\n3. XOR СПИСОК:');
const xor = new XORList();
numbers.forEach(n => xor.add(n));
xor.display();
console.log('Массив:', xor.toArray());