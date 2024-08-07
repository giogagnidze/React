
function List(){

    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]

    // const listItems = fruits.map(fruit => <li>{fruit}</li>)


    const fruits = [{name: "apple", calories: 95}, 
        {name: "orange", calories: 45}, 
        {name: "banana", calories: 105}, 
        {name: "coconut", calories: 159}, 
        {name: "pineapple", calories: 37}]

    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li>)

    return(<ol>{listItems}</ol>);
}
export default List