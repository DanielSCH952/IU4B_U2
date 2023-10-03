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

        public override async Task OnConnectedAsync()
        {
            await Clients.All.SendAsync("UsuarioConectado", Context.ConnectionId);
            await base.OnConnectedAsync();
        }
        public async Task SendNotify()
        {
            await Clients.All.SendAsync("Notify");
        }

        public override async Task OnDisconnectedAsync(Exception e)
        {
            await Clients.All.SendAsync("UsuarioDesconectado", Context.ConnectionId);
            await base.OnDisconnectedAsync(e);
        }
    }
}