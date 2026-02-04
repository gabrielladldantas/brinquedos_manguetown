export interface Brinquedo {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
}

export const brinquedos: Brinquedo[] = [
  { 
    id: 1, 
    nome: "FANTOCHE PORQUINHO", 
    preco: "R$ 120,00", 
    imagem: "/brinquedos/fantoche-porquinho.jpg" 
  },
  { 
    id: 2, 
    nome: "FANTOCHE IEMANJA", 
    preco: "R$ 120,00", 
    imagem: "/brinquedos/fantoche-iemanja.jpg" 
  },
  { 
    id: 3, 
    nome: "CABOCLO DE LANÇA", 
    preco: "R$ 120,00", 
    imagem: "/brinquedos/fantoche-caboclo.jpg" 
  },
  { 
    id: 4, 
    nome: "FANTOCHE CHICO", 
    preco: "R$ 120,00", 
    imagem: "/brinquedos/fantoche-chico.jpg" 
  },
  { 
    id: 5, 
    nome: "FANTOCHE REI DO BAIÃO", 
    preco: "R$ 120,00", 
    imagem: "/brinquedos/fantoche-rei do baiao.jpg"
  },
  { 
    id: 6, 
    nome: "FANTOCHE LOBO", 
    preco: "R$ 120,00", 
    imagem: "/brinquedos/fantoche-lobo.jpg" 
  },
  { 
    id: 7, 
    nome: "FANTOCHE SAPO", 
    preco: "R$ 120,00", 
    imagem: "/brinquedos/fantoche-sapo.jpg" 
  },
  { 
    id: 8, 
    nome: "CAPIVARA", 
    preco: "R$ 120,00", 
    imagem: "/brinquedos/fantoche-capivara.jpg" 
  }
];