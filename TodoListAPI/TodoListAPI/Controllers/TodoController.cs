using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TodoListAPI.Data;
using TodoListAPI.Data.Dtos;
using TodoListAPI.Models;

namespace TodoListAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase         //o nome antes do controler vai no URL no postman
    {
        private TarefaContext _context;        //Aqui ja ta conectado com a DATABASE
        private IMapper _mapper;

        public TodoController(IMapper mapper)
        {
            _context = new TarefaContext();
            _mapper = mapper;
        }

        // FromBody pra falar que a tarefa que eu estou recebendo, vem do corpo da minha requisição
        // POST é pra CRIAR
        [HttpPost]
        public IActionResult AdicionaTask([FromBody] CreateTarefaDto tarefaDto)
        {
            Tarefa tarefa = _mapper.Map<Tarefa>(tarefaDto);        //usando automapper

            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return CreatedAtAction(nameof(RecuperaTarefaPorId), new { Id = tarefa.Id }, tarefa); 
        }

        [HttpGet] // RECUPERA uma informação
        public IEnumerable<Tarefa> RecuperarTarefa()    //  IEnumerable  pra retornar pelo POLIMORFISMO, caso mude algo na lista
        {
            return _context.Tarefas.Where(t => t.Marcar == false);
        }

        [HttpGet("recuperarConcluidas")] 
        public IEnumerable<Tarefa> RecuperarTarefaConcluida()  
        {
            return _context.Tarefas.Where(t => t.Marcar == true);
        }
            
        [HttpGet("{id}")]    //Diferenciar o GET pra RECEBER um ID
        public IActionResult RecuperaTarefaPorId(int id) // Recebe um ID.   IActionResult no lugar de TAREFA porque se não n funciona o OK e NotFound
        {
            Tarefa tarefa = _context.Tarefas.FirstOrDefault(tarefa => tarefa.Id == id);
            if(tarefa != null)
            {
                ReadTarefaDto tarefaDto = _mapper.Map<ReadTarefaDto>(tarefa);

                return Ok(tarefaDto);
            }
            return NotFound();
        }           

        [HttpPut("{id}")]
        public IActionResult AtualizaTarefa(int id, [FromBody] UpdateTarefaDto tarefaDto) // recebe um Id, o que vai vir de novo vem do corpo.
        {
            Tarefa tarefa = _context.Tarefas.FirstOrDefault(tarefa => tarefa.Id == id);
            if(tarefa == null)
            {
                return NotFound();
            }
            _mapper.Map(tarefaDto, tarefa);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPut("marcarTarefa/{id}")]
        public IActionResult MarcarTarefa(int id)
        {
            var tarefa = _context.Tarefas.Where(t => t.Id == id).FirstOrDefault();
            tarefa.Marcar = true;
            _context.SaveChanges();
            return NoContent();
        }
        
        [HttpPut("desmarcarTarefa/{id}")]
        public IActionResult DesmarcarTarefa(int id)
        {
            var tarefa = _context.Tarefas.Where(t => t.Id == id).FirstOrDefault();
            tarefa.Marcar = false;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("delete/{id}")]
        public IActionResult DeletaTarefa(int id)
        {
            Tarefa tarefa = _context.Tarefas.Where(tarefa => tarefa.Id == id).FirstOrDefault();
            if (tarefa == null)
            {
                return NotFound();
            }
            _context.Remove(tarefa);
            _context.SaveChanges();
            return NoContent();
        }
    }               
}
