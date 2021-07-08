import React from 'react';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Resultados Diarios',
    path: '/',
    icon: <IoIcons.IoIosCheckboxOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Resultados Semanais',
    path: '/Resultados',
    icon: <IoIcons.IoIosList />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <IoIcons.IoIosCalendar />,
    cName: 'nav-text'
  }
];