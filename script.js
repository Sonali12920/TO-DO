var arr= [
    {work:"HTML exercise"} ,
    {work:"CSS exercise"} ,
    {work:"JS exercise"} ,
    {work:"OS Assignment"},
    {work:"Fill form"},
    {work:"Reading Novel"},
    {work:"Learning oose chapter"}]
    document.getElementById('submit').addEventListener('click', addData)
        function addData(){
            var work1 = document.getElementById('work').value 
            if(work1.length>0){
                 arr.push({
                     work:work1})
                 showData()
            }else{
                alert('You must write something first')
            } 
        }
        function showData(){
            document.getElementById('data').innerHTML = ''
            for(var i=0;i<arr.length;i++){
                document.getElementById('data').innerHTML += `
                    <tr>
                        <td>${arr[i].work}</td>
                        <td><button onClick="deleteData(${i})">Remove</button></td>
                    </tr>
                `
            }
        }
        function deleteData(index){
            if(confirm('Are you sure you want to remove?')){
                arr.splice(index, 1)
                showData()
            }
        }
        showData()