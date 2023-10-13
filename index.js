const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];
console.log(example.length);
const whereIsWaldo = (matrix) => {
  let waldo = matrix[0][0];
  for (let i=0;i<matrix.length;i++)
  {
    for (let j=0;j<matrix[i].length;j++)
    {
      //const nestedEl1=matrix[i][j];
      if (waldo !== matrix[i][j])
    {
      
      console.log ([i+1,j+1]);
      return [i+1,j+1];
      return (matrix[i+1],matrix[i+1][j+1]);
    } }

  }
  return null;
}
whereIsWaldo(example);