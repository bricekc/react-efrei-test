
function ListNumber() {
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1)

    return (
            <ul>
                {
                    numbers.map(number => {
                        if (number % 5 === 0) {
                            return <li key={number}>
                                {number}
                            </li>
                        }
                    })
                }
            </ul>
    );
}

export default ListNumber;