import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

interface Topico {
  assunto: string;
  pergunta: string;
  nome: string;
  respostas: number;
  likes: number;
  respostasDosAutores: { nome: string; resposta: string }[];
  aprovado: boolean;
}


 
@Component({
    selector: 'app-discussoes',
    templateUrl: './discussoes.component.html',
    styleUrls: ['./discussoes.component.scss']
  })

export class BoxDiscussoes implements OnInit{

  
  topicoEnviado = false;  
  criarTopicoAberto = false;
  showRespostas = false;  
  form!: FormGroup;
  


  topicos: Topico[] = [
    {
      assunto: 'Assunto da pergunta aparece aqui',
      nome: 'Carlos Henrique Santos',
      pergunta: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?',
      respostas: 1,
      likes: 1,
      aprovado: true,
      respostasDosAutores: [
        {
          nome: 'Teste 1',
          resposta: 'Resposta do autor é aqui. Resposta Teste 1'
        }
      ]
    },
    {
      assunto: 'Assunto da pergunta aparece aqui',
      nome: 'Carlos Henrique Santos',
      pergunta: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?',
      respostas: 1,
      likes: 1,
      aprovado: true,
      respostasDosAutores: [
        {
          nome: 'Teste 2',
          resposta: 'Resposta do autor é aqui. Resposta Teste 2'
        }
      ]
    }
  ];
  
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      assunto: new FormControl(''),
      pergunta: new FormControl(''),
    })
  }
  
  criarTopico(){
    this.topicoEnviado = false;
    this.criarTopicoAberto = true;
  }
  

  mostrarRespostas(topico: HTMLDivElement): void {
    if(topico.classList.contains('respostasActice')) {
      topico.classList.remove('respostasActice')
      return;
    }
    topico.classList.add('respostasActice')
  }

  enviarTopico(): void {
    if(!this.form.valid) return;
    const topico = this.form.value;
    topico.nome = 'Carlos Henrique Santos';
    topico.respostas = 0;
    topico.likes = 0;
    topico.respostasDosAutores = []
    topico.aprovado = false;
    this.topicoEnviado = true;
    this.topicos.unshift(topico);
    this.form.reset();
  }
}
