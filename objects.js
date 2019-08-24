const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)');
    } else {
        console.log('SHAME');
    };
};

bouncer(12);
bouncer(93);

const myObject = {
    name: 'john',
    age: '41',
};

console.log(myObject.name);

// Challange

const person = {
    name: 'Michael',
    status: ''
}

const findNlogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'vip'
    } else {
        employee.status = 'peseant'
    }
    console.log (`${employee.name} is a total ${employee.status}`);
    return employee;
};

findNlogEmployeeStatus(person);

findNlogEmployeeStatus({
    name: prompt('Enter Employee Name'),
    status: ''
});