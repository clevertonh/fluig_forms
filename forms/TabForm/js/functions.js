function getFormStructure(id, url){
	$("#" + id).load(url);
	addLogMessage("Formulário '" + id + "' carregado com sucesso!", "#32CD32", "#FFFFFF");
}