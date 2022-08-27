function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    let queyStringId = urlParams.get('id');;
    usuarios.forEach(item => {
        

        if(item.Id == queyStringId){
            let aniversario = item.DtNascimento.split("/");
            let dia = aniversario[0];
            let mes = aniversario[1];
            let ano = aniversario[2];

            $('#usuImage img').attr('src', item.Img);
            $('#nome').append(item.Nome);
            $('#idade').append(idade(ano,mes,dia));
            $('#curso').append(item.Curso);
            $('#nota').append(item.Nota);
            

        }
        
    });
});

