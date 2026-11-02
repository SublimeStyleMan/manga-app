using MangaServer.Services;
using Microsoft.AspNetCore.Server.Kestrel.Core;


var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(o =>
{
    o.ListenAnyIP(8080, l => l.Protocols = HttpProtocols.Http1);
    o.ListenAnyIP(8081, l => l.Protocols = HttpProtocols.Http2);
});

builder.Services.AddGrpc();

var app = builder.Build();
app.MapGrpcService<GreeterService>();

// you can delete this later
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
app.Run();
