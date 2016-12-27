var totalFiles, neededFiles, percent;
function SetFilesTotal( total ) {
  totalFiles = total;
}
function SetFilesNeeded( needed ) {
  neededFiles = needed;
  percent = Math.round((totalFiles - neededFiles)/totalFiles * 100);
  document.getElementById("progress").innerHTML = "<div class='progress-bar' role='progressbar' style='width:"+percent+"%;'></div>";
}