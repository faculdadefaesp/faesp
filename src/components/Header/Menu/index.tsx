import React from 'react';
import Link from 'next/link';

export function Links() {
  return (
      <div>
          <nav>
            <ul>
                <li>
                    <Link href="">
                        <a>Institucional</a>
                    </Link>
                    <ul>
                            <li>
                                <Link href="">
                                    <a>Diretor Executivo</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Corpo Docente | Professores</a>
                                </Link>

                            </li>
                            <li>
                                <Link href="">
                                    <a>Corpo Docente | Coordenadores</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <a>Equipe FAESP</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <a>História FAESP</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <a>Comissão Própria de Avaliação</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <a>Modole de Documentos | Guia Aluno</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <a>Revista Acadêmica</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <a>Portarias</a>
                                </Link>
                            </li>
                        </ul>
                </li>

                <li>
                    <Link href="">
                        <a>Graduação</a>
                    </Link>
                    <ul>
                        
                    </ul>
                </li>

                <li>
                    <Link href="">
                        <a>Pós-Graduação</a>
                    </Link>
                </li>

                <li>
                    <Link href="">
                        <a>Cursos Livres</a>
                    </Link>
                </li>

                <li>
                    <Link href="">
                        <a>Extensões</a>
                    </Link>
                </li>

                <li>
                    <Link href="">
                        <a>Publicações</a>
                    </Link>
                </li>

                <li>
                    <Link href="">
                        <a>Serviços</a>
                    </Link>
                </li>

                <li>
                    <Link href="">
                        <a>Ouvidoria</a>
                    </Link>
                </li>
            </ul>
          </nav>  
      </div>
  )
}
