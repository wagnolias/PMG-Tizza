export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // formato yyyy-mm-dd
  coverImage?: string;
  body: string[]; // um parágrafo por item
}

// Adicione novos artigos aqui, um objeto por post. Cada item aparece
// automaticamente como card na listagem (#blog) e ganha uma página própria em
// #blog/<slug>. Enquanto a lista estiver vazia, a seção mostra um estado de
// "em breve" no site.
export const blogPosts: BlogPost[] = [];
