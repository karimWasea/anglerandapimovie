import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/Servevess/genre.service';
 import { Genra } from 'src/app/Viewmodels/genra';

@Component({
  selector: 'app-genra',
  templateUrl: './genra.component.html',
  styleUrls: ['./genra.component.css']
})
  
 
export class GenreComponent implements OnInit {
  genras: Genra[] = [];
  filteredGenras: Genra[] = [];
  filterText: string = '';
  modalVisible: boolean = false;
  isEditMode: boolean = false;
  newGenra: Genra = { id: 0, name: '' };
  // Pagination variables
  pageNumber: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;
  constructor(private genrasService: GenresService) {}

  ngOnInit(): void {
    this.loadGenras();
  }

  loadGenras(): void {
    this.genrasService.getAll(this.filterText, this.pageNumber, this.pageSize).subscribe((data) => {
      this.genras = data;
      this.filteredGenras = data;
    });
  }

  // loadGenras(): void {
  //   this.genrasService.getAll().subscribe((data) => {
  //     this.genras = data;
  //     this.filteredGenras = data;
  //   });
  // }

  filterGenras(): void {
    this.filteredGenras = this.genras.filter(genra =>
      genra.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  showAddModal(): void {
    this.isEditMode = false;
    this.newGenra = { id: 0, name: '' };
    this.modalVisible = true;
  }

  openEditModal(genra: Genra): void {
    this.isEditMode = true;
    this.newGenra = { ...genra };
    this.modalVisible = true;
  }

  addGenra(): void {
    this.genrasService.create(this.newGenra).subscribe((genra) => {
      this.genras.push(genra);
      this.resetForm();
      this.filterGenras();
    });
  }

  updateGenra(): void {
    this.genrasService.update(this.newGenra.id, this.newGenra).subscribe(() => {
      this.loadGenras();
      this.resetForm();
    });
  }

  deleteGenra(id: number): void {
    this.genrasService.delete(id).subscribe(() => {
      this.genras = this.genras.filter((g) => g.id !== id);
      this.filterGenras();
    });
  }

  resetForm(): void {
    this.newGenra = { id: 0, name: '' };
    this.modalVisible = false;
    this.isEditMode = false;
  }

  // Pagination methods
  nextPage(): void {
    this.pageNumber++;
    this.loadGenras();
  }

  previousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.loadGenras();
    }
  }
}

