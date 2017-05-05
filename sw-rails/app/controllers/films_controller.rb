class FilmsController < ApplicationController
  def index
    @films = Film.all
    @film = Film.new
  end

  def create
    @film = Film.new(film_params)

    respond_to do |format|
      # If the requester asked for an HTML response, we'll treat it as a normal request
      format.html do
        if @film.save
          redirect_to films_path
        else
          render :index
        end
      end

      # If the requested asked for JSON (which we did in films.js), we'll return
      # a JSON representation of our film
      format.json do
        if @film.save
          render json: @film
        else
          render :index
        end
      end
    end
  end

  private
  def film_params
    params.require(:film).permit(:title)
  end
end
