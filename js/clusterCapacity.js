/*
 * Clear form Function
 */
function clearForm() {
  document.getElementById('clusterCapacity').reset();
}

/***
 * Calculation of memory based on the quantity of nodes and pod Size.
 */
function calculateBasedMem() {
	//var theForm = document.forms["capacity_form"];
  var qtyAppNode = document.getElementById('qtyAppNode').value;
  var appNodeMem = document.getElementById('memNodeSize').value;
  var memPodSize = document.getElementById('memPodSize').value;
  var totalAppNodeMem = appNodeMem * qtyAppNode;
  var totalPodPerMem = totalAppNodeMem / memPodSize;
  return totalPodPerMem;
	//display the result
  //document.getElementById('ccapacity').innerHTML = "Total pod por Mem: "+totalPodPerMem;
}
/***
 * Calculation of CPU based on the quantity of nodes and pod consumption estimative.
 */
function calculateBasedCpu() {
  var qtyAppNode = document.getElementById('qtyAppNode').value;
  var appNodeCpu = document.getElementById('cpuNodeSize').value;
  var cpuPodSize = document.getElementById('cpuPodSize').value;
  var totalAppNodeCpu = appNodeCpu * qtyAppNode;
  var totalPodPerCpu = totalAppNodeCpu / cpuPodSize;
  return totalPodPerCpu;
	//display the result
  //document.getElementById('ccapacity').innerHTML = "Total pod por CPU: "+totalPodPerCpu;
}

function compare() {

	var basedMem = Math.floor(calculateBasedMem());
  var basedCpu = Math.floor(calculateBasedCpu());
  var qtyAppNode = document.getElementById('qtyAppNode').value;

	if (basedMem > basedCpu){
	  //display the result
    var divobj = document.getElementById('cluster_capacity');
    divobj.style.display='block';
    divobj.innerHTML = "Total pod por Mem: "+basedMem;
	} else {
	  //display the result
    var divobj = document.getElementById('cluster_capacity');
    divobj.style.display='block';
    divobj.innerHTML = "You can place: "+basedCpu+ " distributed in all"+ qtyAppNode +" nodes./n";
	}
	
}

function hideTotal()
{
    var divobj = document.getElementById('cluster_capacity');
    divobj.style.display='none';
}


