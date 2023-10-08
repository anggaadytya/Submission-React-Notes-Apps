const getInitialData = () => [
  {
    id: 1,
    title: "Pengenalan React",
    body: `React (dikenal juga dengan React.js atau ReactJS) adalah libray JavaScript yang digunakan untuk membangun user interface yang interaktif berbasis component. React yang dibuat oleh Facebook (sekarang Meta) dan bersifat open-source (sumber terbuka), sehingga dapat digunakan oleh siapa saja secara gratis.`,
    isArchived: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Konsep Dasar React",
    body: "yaitu Composit, Delarative Code, Unidirectional Data Flow, React tak lebih dari javaScript",
    isArchived: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "React UI Component",
    body: "Membuat element dan Component, mengenal component, komposisi component, ",
    isArchived: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "StateFul Component",
    body: "Membuat react component menggunakan sintaksis class (class component), membuat dan mengelola state di dalam class component, menangani event pada react component, memahami controlled element dalam membuat form input",
    isArchived: false,
    createdAt: new Date().toISOString(),
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
