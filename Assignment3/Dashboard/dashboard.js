// Declare variables for address and data
var dashboard_url = "http://localhost:3000/readings?_sort=time&_order=DESC";
var dbData;
var tableId="dbTable";

// Refresh the page every 2s
setInterval(function(){window.location.reload();},2000);

// Set function onload() by using AJAX to load external JSON
function onload(){

    $.ajax({
                    type:"GET",
                    url:dashboard_url,
                    dataType:"json",
                    success:function(data){
                    	dbData=data;

                        onData();
                    }
                })
}

function onData(){

	if (!dbData) return;

    dbData.forEach(function(item){
        console.log(item);
        item.timeString=timeFormat(item.timestamp);{
           getTable(item);				
        }
     });	    		
}

function getTable(item){

	var tableObj = document.getElementById(tableId);
	var rowLength = tableObj.rows.length;
	var tableRow = tableObj.insertRow(rowLength);
    tableRow.innerHTML="<td>"+item.id+"</td>"+"<td>"+item.timeString+"</td>"+"<td>"+item.value+"</td>";
}

// Set a function to convert time format
function timeFormat(timestamp) {
    
        var  date = new Date(timestamp);
        console.log(date);
 
        var Year = date.getFullYear() + '-';
        console.log(Year);
 
        var Month = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
        switch(Month){
            case 1:Month="Jan. ";break;
            case 2:Month="Feb. ";break;
            case 3:Month="Mar. ";break;
            case 4:Month="Apr. ";break;
            case 5:Month="May. ";break;
            case 6:Month="Jun. ";break;
            case 7:Month="Jul. ";break;
            case 8:Month="Aug. ";break;
            case 9:Month="Sept. ";break;
            case 10:Month="Oct. ";break;
            case 11:Month="Nov. ";break;
            case 12:Month="Dec. ";break;
            default:Month="";break;
        }

        var Week = date.getDay();
        switch(Week){
            case 1:Week="Monday ";break;
            case 2:Week="Tuesday ";break;
            case 3:Week="Wednesday ";break;
            case 4:Week="Thursday ";break;
            case 5:Week="Friday ";break;
            case 6:Week="Saturday ";break;
            case 0:Week="Sunday ";break;
            default:Week="";break;
        }
 
        var Day = (date.getDate()>9?"":"0")+date.getDate() + ' ';
        console.log(Day);
 
        var Hour = (date.getHours()>9?"":"0")+date.getHours() + ':';
 
        var Minute = (date.getMinutes()>9?"":"0")+date.getMinutes() + ':';
 
        var Second = (date.getSeconds()>9?"":"0")+date.getSeconds();

        var Zone = ' GMT - 0' + ( date.getTimezoneOffset()*100 / 60);

        var zoneName=Intl.DateTimeFormat().resolvedOptions().timeZone;
 
        return Week+Month+Day+Year+Hour+Minute+Second+Zone+" ("+zoneName+")";
    }


