import Task from '../Molecules/Task.js';
import Section from '../Molecules/Section.js';


export default function() {
    const section = Section('addItem', 'ADD ITEM');
    const task = Task();
    section.appendChild(task);
    return section;
};