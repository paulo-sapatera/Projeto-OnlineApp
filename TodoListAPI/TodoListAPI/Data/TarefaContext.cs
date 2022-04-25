using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoListAPI.Models;

namespace TodoListAPI.Data
{
    public class TarefaContext : DbContext     //DBContext p/ falar que é uma conexao entre a API e o banco de dados
    {
        // metódo para conectar com o banco
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=tarefadb; Trusted_Connection = true;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TarefaConfiguration());
        }
        public DbSet<Tarefa> Tarefas { get; set; }

    }
}
