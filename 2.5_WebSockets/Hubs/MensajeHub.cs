using Microsoft.AspNetCore.SignalR;

namespace _2._5_WebSockets.Hubs
{
    public class MensajeHub : Hub
    {
        public async Task EnviarMensaje(string msj)
        {
            string hora = DateTime.Now.ToShortTimeString();
            string fecha = DateTime.Now.ToShortDateString();
            string message = $"Fecha: {fecha}, Hora: {hora}  Mensaje: {msj}";
            await Clients.All.SendAsync("EnviarMensajeTodos", message);
        }
    }
}