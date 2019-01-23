import compare from 'compare-versions';

const methods = [
    {
        type: 'compare',
        value: (...i) => compare(...i),
    },
];

export default methods;
