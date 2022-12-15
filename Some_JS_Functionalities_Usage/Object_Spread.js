const animals ={
    lion: 2,
    monkey: 5,
    leopard: 3,
    parrots: 20
}

const objectSpread = (a, b, c ) => {
    console.log(a);
    console.log(b);
    console.log(c);
}

const {lion, leopard, ...rest} = animals;

objectSpread(lion, leopard, rest);