Rails.application.routes.draw do
  # get '/films'
  resources :films, only: [:index, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
