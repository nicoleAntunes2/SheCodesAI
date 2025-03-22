document.getElementById('instruction-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Impede o envio do formulário

  const instruction = document.getElementById('instruction').value;
  const generatedContentDiv = document.getElementById('generated-content');

  // Simulação de geração de conteúdo baseado na instrução do usuário
  let generatedContent = '';

  if (instruction.toLowerCase().includes('piada')) {
    generatedContent = 'Aqui vai uma piada: Por que o livro foi ao médico? Porque ele estava com muitas páginas faltando!';
  } else if (instruction.toLowerCase().includes('poema')) {
    generatedContent = 'Aqui está um poema: O vento sussurra nas árvores, A lua brilha no céu azul, A noite é calma e serena, A paz toma conta de mim e de você.';
  } else if (instruction.toLowerCase().includes('receita')) {
    generatedContent = 'Receita de bolo simples: 1 xícara de açúcar, 2 xícaras de farinha, 3 ovos, 1 colher de fermento. Misture tudo e leve ao forno por 30 minutos!';
  } else {
    generatedContent = `Você pediu: "${instruction}". Desculpe, não tenho um conteúdo para isso no momento. Tente algo diferente!`;
  }

  // Exibe o conteúdo gerado
  generatedContentDiv.innerHTML = generatedContent;
  generatedContentDiv.style.display = 'block';  // Torna o conteúdo visível
});
