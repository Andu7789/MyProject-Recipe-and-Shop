using Microsoft.AspNetCore.Mvc;


namespace LogonApps.Controllers;

[ApiController]
[Route("[controller]")]
public class LogonController : ControllerBase
{
    private static readonly List<UserCredentials> Users = new List<UserCredentials>
    {
        new UserCredentials { Username = "Admin1", Password = "1234" },
        new UserCredentials { Username = "Admin2", Password = "5678" },
        new UserCredentials { Username = "A", Password = "1" }
        // Add more users as needed
    };
    private readonly ILogger<LogonController> _logger;

    public LogonController(ILogger<LogonController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "Logon")]
    public IActionResult GetUsers()
    {
        return Ok(Users);
    }
}
