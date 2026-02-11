
export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';
export type View = 'home' | 'privacy' | 'terms';

export interface NavItem {
  id: string;
  labelEn: string;
  labelAr: string;
}

export interface Service {
  id: number;
  icon: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export interface Project {
  id: number;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  image: string;
}

export interface Stat {
  id: number;
  value: string;
  labelEn: string;
  labelAr: string;
}
