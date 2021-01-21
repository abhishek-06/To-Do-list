$(function () {

    let ulTasks = $('#ulTasks')
    let btnAdd = $('#btnAdd')
    let btnReset = $('#btnReset')
    let btnSort = $('#btnSort')
    let btnCleanup = $('#btnCleanup')
    let inpNewTask = $('#inpNewTask')

    function addItem() {


        if(inpNewTask.val() == ''){
            alert('Enter something');
            return;
        }

        let listItem = $('<li>' , {
            'class' : 'list-group-item list-group-item-primary',
            text: inpNewTask.val()
        });

        listItem.click(()=>{
            //listItem.toggleClass(disabled);
            listItem.toggleClass('done');
        })

        ulTasks.append(listItem);
        inpNewTask.val('');
        toggleButtons();
    }

    btnAdd.click(addItem);

    function clearDone() {
        $('#ulTasks .done').remove();
        toggleButtons();
    }

    function sortTasks() {
        $('#ulTasks .done').appendTo(ulTasks);
    }

    function toggleInputButtons() {
        btnReset.prop('disabled', inpNewTask.val() == '')
        btnAdd.prop('disabled', inpNewTask.val() == '')
        btnSort.prop('disabled', ulTasks.children().length < 1)
        btnCleanup.prop('disabled', ulTasks.children().length < 1)
      }

      inpNewTask.keypress((e)=>{
          if(e.which == 13) 
          addItem();
      })

      inpNewTask.on('input', toggleInputButtons);

      btnReset.click(() => {
        inpNewTask.val('');
        toggleInputButtons();
      })
      btnCleanup.click(clearDone);
      btnSort.click(sortTasks);

});