angular.module("listTelefonica").controller("listaTelefonicaCtrl", function($scope){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [
		{nome: "Mateus", telefone: "991860681", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
		{nome: "Marcelo", telefone: "991231312", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}}
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
		{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
		{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
		{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
		{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
	];
	$scope.adicionarContato = function(contato){
		$scope.contatos.push(angular.copy(contato));
		$scope.contatoForm.$setPristine;
	};
	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato) {
			if(!contato.selecionado){
				return contato;
			}
		});
	};
	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	};
	$scope.ordernarPor = function(campo){
		$scope.order_campo = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	};
});