﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MoviesApi.Models;

#nullable disable

namespace MoviesApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("MoviesApi.Models.Genre", b =>
                {
                    b.Property<byte>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("tinyint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<byte>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Genres");

                    b.HasData(
                        new
                        {
                            Id = (byte)1,
                            Name = "Action"
                        },
                        new
                        {
                            Id = (byte)2,
                            Name = "Drama"
                        },
                        new
                        {
                            Id = (byte)3,
                            Name = "Comedy"
                        });
                });

            modelBuilder.Entity("MoviesApi.Models.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<byte>("GenreId")
                        .HasColumnType("tinyint");

                    b.Property<byte[]>("Poster")
                        .HasColumnType("varbinary(max)");

                    b.Property<double>("Rate")
                        .HasColumnType("float");

                    b.Property<string>("Storeline")
                        .IsRequired()
                        .HasMaxLength(2500)
                        .HasColumnType("nvarchar(2500)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("GenreId");

                    b.ToTable("Movies");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            GenreId = (byte)1,
                            Rate = 8.8000000000000007,
                            Storeline = "A thief with the ability to enter people's dreams takes on the ultimate heist.",
                            Title = "Inception",
                            Year = 2010
                        },
                        new
                        {
                            Id = 2,
                            GenreId = (byte)1,
                            Rate = 9.0,
                            Storeline = "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological tests of his ability to fight injustice.",
                            Title = "The Dark Knight",
                            Year = 2008
                        },
                        new
                        {
                            Id = 3,
                            GenreId = (byte)2,
                            Rate = 8.0,
                            Storeline = "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.",
                            Title = "The Pursuit of Happyness",
                            Year = 2006
                        });
                });

            modelBuilder.Entity("MoviesApi.Models.Movie", b =>
                {
                    b.HasOne("MoviesApi.Models.Genre", "Genre")
                        .WithMany()
                        .HasForeignKey("GenreId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Genre");
                });
#pragma warning restore 612, 618
        }
    }
}
