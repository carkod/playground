<!DOCTYPE html>
<html lang="en">
  <?php include 'head.php' ; ?>

  <body>

    <?php include 'top-nav.php' ; ?>

    <div class="container-fluid">
      <div class="row">
          
        <?php include 'side-nav.php' ; ?>
        
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Nasdaq Composite <small>&mdash; 1999 to 2016</small></h1>

          <div class="row placeholders">
            <div id="chart-holder-nasdaq" class="col-xs-6 col-sm-3 placeholder" style="height: 300px; width: 100%;">
              
            </div>
           
          </div>

          <h2 class="sub-header">Statistical analysis</h2>
          <div class="table-responsive">
          

          </div>
          
          <h2 class="sub-header">Tecnical analysis</h2>
          <div class="table-responsive">
          

          </div>
          
          <h2 class="sub-header">Fundamental analysis</h2>
          <div class="table-responsive">
          

          </div>
          
        </div>
      </div>
    </div>

    <?php include 'foot.php' ?>
    <script type="text/javascript" src="graphs/nasdaq.js"></script>
    <script type="text/javascript">

    </script>
  </body>
</html>
