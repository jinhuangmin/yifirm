/**
 * Created by uid on 2017/1/5.
 */
$("#header").load('data/header.php');
$("#footer").load('data/footer.php');
/*办理的内容切换*/
$(".blcl-tab").on("click","li",function(){
  var idx=$(this).index();
  $(this).addClass("active")
    .siblings().removeClass("active");
  $(this).parent().next().children("ul").eq(idx)
    .removeClass("hide").siblings().addClass("hide");

})