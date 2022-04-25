using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TodoListAPI.Data.Dtos;
using TodoListAPI.Models;

namespace TodoListAPI.Profiles
{
    public class TarefaProfile : Profile
    {
        
            public TarefaProfile()
        {
            CreateMap<CreateTarefaDto, Tarefa>();
            CreateMap<Tarefa, ReadTarefaDto>();
            CreateMap<UpdateTarefaDto, Tarefa>();
        }
    }
}
