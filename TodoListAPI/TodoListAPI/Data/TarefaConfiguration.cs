using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TodoListAPI.Models;

namespace TodoListAPI.Data
{
    // mapeamento pra fazer o valor default ficar com a data atual
    public class TarefaConfiguration : IEntityTypeConfiguration<Tarefa>
    {
        public void Configure(EntityTypeBuilder<Tarefa> builder)
        {
            builder.Property(t => t.Data)
                .HasColumnType("datetime")
               .HasDefaultValueSql("getdate()");

            builder.Property(t => t.Marcar)
                .HasDefaultValue("false");
        }
    }
}
