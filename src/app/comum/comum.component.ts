import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VagasService } from '../services/vagas.service';
import { ParkingSpot } from '../parking-spot';

@Component({
  selector: 'app-comum',
  imports: [FormsModule, CommonModule],
  templateUrl: './comum.component.html',
  styleUrl: './comum.component.css'
})
export class ComumComponent {
  data : any;

  spots: ParkingSpot[] = [];

  filterStatus: string = 'Todos';

  constructor(private vagasService: VagasService){
    this.getVagas()
  }

  reserveSpot(id: number) {
    this.spots = this.spots.map(spot =>
      spot.id === id && spot.status === 'Disponivel' ? { ...spot, status: 'Reservada' } : spot
    );
  }

  releaseSpot(id: number) {
    this.spots = this.spots.map(spot =>
      spot.id === id && spot.status === 'Reservada' ? { ...spot, status: 'Disponivel' } : spot
    );
  }

  OcuparSpot(id: number) {
    this.spots = this.spots.map(spot =>
      spot.id === id && spot.status === 'Disponivel' ? { ...spot, status: 'Ocupada' } : spot
    );
  }
 
  DisponiSpot(id: number) {
    this.spots = this.spots.map(spot =>
      spot.id === id && spot.status === 'Ocupada' ? { ...spot, status: 'Disponivel' } : spot
    );
  }

  getFilteredSpots(): ParkingSpot[] {
    return this.spots.filter(spot => spot.tipo === 'Comum');

  }

  getVagas(): void {
    this.vagasService.getAll().subscribe((spots) => this.spots = spots)
  }

}
