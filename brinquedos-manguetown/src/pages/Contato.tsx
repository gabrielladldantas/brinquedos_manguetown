import { useState, type FormEvent } from 'react';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [open, setOpen] = useState(false);

  const WHATSAPP_NUMBER = "558194498361";
  const INSTAGRAM_USER = "fabricas_de_ideias";

  const closeForm = () => {
    setOpen(false);
    setEnviado(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-dmsans text-[#2B3826]">
      <main className="grow max-w-7xl mx-auto px-6 py-12 w-full flex flex-col items-center">
        
        <h1 className="text-6xl font-bold mb-12 text-[#259C38] uppercase tracking-tight text-center">
          Contato
        </h1>

        <div className="w-full max-w-2xl flex flex-col gap-8">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#259C38] text-white rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm hover:brightness-110 transition-all"
            >
              <span className="font-bold text-lg uppercase tracking-wider">WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>

            <a
              href={`https://instagram.com/${INSTAGRAM_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#259C38] text-white rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm hover:brightness-110 transition-all"
            >
              <span className="font-bold text-lg uppercase tracking-wider">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B3826] mb-8 leading-tight">
              Se preferir, nós entramos em contato com você!
            </h2>
            
            <button
              onClick={() => setOpen(true)}
              className="bg-[#2B3826] text-white rounded-2xl px-8 py-5 flex items-center justify-between w-full shadow-sm hover:bg-[#259C38] transition-all font-bold text-xl uppercase tracking-wider"
            >
              Enviar E-mail
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </button>
          </div>

          
          {open && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="bg-white border-2 border-[#D6D6D2] rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative overflow-y-auto max-h-[90vh]">
                <button 
                  className="absolute top-4 right-6 text-3xl text-[#2B3826] hover:text-red-500 font-bold" 
                  onClick={closeForm}
                >
                  &times;
                </button>

                <h2 className="text-3xl font-bold mb-6 text-[#2B3826] uppercase text-left">Fale Conosco</h2>

                {enviado ? (
                  <div className="text-center py-10">
                    <p className="text-[#259C38] font-bold text-2xl">Mensagem enviada com sucesso!</p>
                    <button onClick={closeForm} className="mt-4 text-[#D8A667] font-bold hover:underline">
                      Fechar janela
                    </button>
                  </div>
                ) : (
                  <form
                    action="https://formsubmit.co/daniellefabricadeideias@gmail.com"
                    method="POST"
                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                      e.preventDefault();
                      fetch(e.currentTarget.action, {
                        method: 'POST',
                        body: new FormData(e.currentTarget),
                        headers: { 'Accept': 'application/json' }
                      })
                      .then(() => setEnviado(true))
                      .catch(() => alert("Erro ao enviar."));
                    }}
                    className="flex flex-col gap-5"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="flex flex-col gap-1 text-left">
                      <label className="font-bold text-lg">Nome</label>
                      <input type="text" name="name" required className="border-2 border-[#D6D6D2] px-4 py-3 rounded-xl focus:border-[#259C38] outline-none" />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <label className="font-bold text-lg">Email</label>
                      <input type="email" name="email" required className="border-2 border-[#D6D6D2] px-4 py-3 rounded-xl focus:border-[#259C38] outline-none" />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <label className="font-bold text-lg">Mensagem</label>
                      <textarea name="message" rows={4} required className="border-2 border-[#D6D6D2] px-4 py-3 rounded-xl focus:border-[#259C38] outline-none" />
                    </div>
                    <button type="submit" className="bg-[#2B3826] text-white rounded-xl px-6 py-4 hover:bg-[#259C38] font-bold text-xl uppercase tracking-widest shadow-md w-full">
                      Enviar Mensagem
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}