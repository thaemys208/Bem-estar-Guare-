import { RouteObject } from "react-router";
import { lazy } from 'react';
import HomePage from './pages/index';
import MembrosPage from './pages/membros';
import ConsultasPage from './pages/consultas';
import ExamesPage from './pages/exames';
import MedicamentosPage from './pages/medicamentos';
import SaudeFemininaPage from './pages/saude-feminina';
import HistoricoPage from './pages/historico';
import GestacaoPage from './pages/gestacao';
import SinaisVitaisPage from './pages/sinais-vitais';
import PesoPage from './pages/peso';
import LaboratorioPage from './pages/laboratorio';
import CuidadoresPage from './pages/cuidadores';
import NotificacoesPage from './pages/notificacoes';
import AvisosPage from './pages/avisos';
import ConfiguracoesPage from './pages/configuracoes';
import PermissoesMembrosPage from './pages/permissoes-membros';
import LoginPage from './pages/login';
import ProdNotFoundPage from './pages/_404';
import RequireAuth from './components/RequireAuth';

const NotFoundPage = import.meta.env.DEV
  ? lazy(() => import('../dev-tools/src/PageNotFound'))
  : ProdNotFoundPage;

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <RequireAuth><HomePage /></RequireAuth>,
  },
  {
    path: '/membros',
    element: <RequireAuth><MembrosPage /></RequireAuth>,
  },
  {
    path: '/consultas',
    element: <RequireAuth><ConsultasPage /></RequireAuth>,
  },
  {
    path: '/exames',
    element: <RequireAuth><ExamesPage /></RequireAuth>,
  },
  {
    path: '/medicamentos',
    element: <RequireAuth><MedicamentosPage /></RequireAuth>,
  },
  {
    path: '/saude-feminina',
    element: <RequireAuth><SaudeFemininaPage /></RequireAuth>,
  },
  {
    path: '/historico',
    element: <RequireAuth><HistoricoPage /></RequireAuth>,
  },
  {
    path: '/gestacao',
    element: <RequireAuth><GestacaoPage /></RequireAuth>,
  },
  {
    path: '/sinais-vitais',
    element: <RequireAuth><SinaisVitaisPage /></RequireAuth>,
  },
  {
    path: '/peso',
    element: <RequireAuth><PesoPage /></RequireAuth>,
  },
  {
    path: '/cuidadores',
    element: <RequireAuth><CuidadoresPage /></RequireAuth>,
  },
  {
    path: '/avisos',
    element: <RequireAuth><AvisosPage /></RequireAuth>,
  },
  {
    path: '/notificacoes',
    element: <RequireAuth><NotificacoesPage /></RequireAuth>,
  },
  {
    path: '/configuracoes',
    element: <RequireAuth><ConfiguracoesPage /></RequireAuth>,
  },
  {
    path: '/permissoes-membros',
    element: <RequireAuth><PermissoesMembrosPage /></RequireAuth>,
  },
  {
    path: '/laboratorio',
    element: <RequireAuth><LaboratorioPage /></RequireAuth>,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export type Path =
  | '/'
  | '/membros'
  | '/consultas'
  | '/exames'
  | '/medicamentos'
  | '/saude-feminina'
  | '/historico'
  | '/gestacao'
  | '/sinais-vitais'
  | '/peso'
  | '/laboratorio'
  | '/login';

export type Params = Record<string, string | undefined>;
