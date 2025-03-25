package server

import (
	"github.com/danfestudio/savelifefoundation/routes"
	"github.com/gofiber/fiber/v2"
)

func Routes(app *fiber.App) {

	app.Get("/", routes.Index)	
}