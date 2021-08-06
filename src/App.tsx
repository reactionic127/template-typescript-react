export default class Calculator {
    sum(str: string) {
        if (!str) {
            return 0
        }
        const numArr = (str.match(/-?\d+/g) || []).map(s => parseFloat(s))
        const negative = numArr.filter(n => n < 0)
        if(negative.length >0) {
            throw `negatives not allowed: ${negative.join(", ")}`;
            
        } 
        const sum = numArr.reduce((acc, curr) => acc + curr, 0)
        return sum
    }
}
