import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { ConsultaEmpresaComponent } from './pages/consulta-empresa/consulta-empresa.component';
import { ConsultaClienteComponent } from './pages/consulta-cliente/consulta-cliente.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'sobre', component: SobreComponent },
    { path:'cadastro', component: CadastroComponent },
    { path:'cadastro-empresa', component: CadastroEmpresaComponent },
    { path:'cadastro-cliente', component: CadastroClienteComponent },
    { path:'consulta', component: ConsultaComponent },
    { path:'consulta-empresa', component: ConsultaEmpresaComponent },
    { path:'consulta-cliente', component: ConsultaClienteComponent }
];
