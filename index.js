let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((item)=>{
        if(item.profession=="developer")
        {
          console.log(item);
        }
      });
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((item)=>{
        if(item.profession=="developer")
        {
          console.log(item);
        }
      });
    }
  
  function addData() {
    const obj={id:4,name:"shabaaz",age:"23",profession:"intern"};
    arr.push(obj);
    console.log(arr);
  }
  
  function removeAdmin() {
    const updatedEmployee=arr.filter(item=>item.profession!="admin");
    console.log(updatedEmployee);
    arr=updatedEmployee;
  }
  
  function concatenateArray() {
    const newArr=[{id:6,name:"jean",age:"20",profession:"intern"},
    {id:7,name:"mahesh",age:"22",profession:"intern"},
    {id:8,name:"shubham",age:"23",profession:"intern"}];

  const concatenateArray=arr.concat(newArr);
  console.log(concatenateArray);
  }