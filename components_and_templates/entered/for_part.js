<script type="text/template" id="forPart">
        <div>
             <div id="sharing_roles">
                // текст из объекта json
             </div>
             <div id="chooseReplics">
                  <a href="#">Paint by roles</a>
                  <a href="#">Paint by term</a> 
                  <div id="divForForm">
                    // загружается одна или другая форма
                  </div>  
             </div>
             <div id="top_of_part">
                    <div>
                        <h2 id='headerForPart'>
                            <span>Part </span> 
                            <span><%=number%></span>
                            <span><%=header%></span>
                        </h2>
                    </div>
                    <div id='buttons'>
                        <button type='button' value='◄' id='scrollBack'></button>
                        <button type='button' value='►' id='fscrollFront'></button>
                        <button type='button' id='paintWordsFromVocab'></button>
                    </div>  
             </div>
             <div id="content_of_part">
                // Совокупность дивов с репликами
             </div>
        </div>
</script>