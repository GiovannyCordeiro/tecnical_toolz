Rails.application.routes.draw do
  root "pages#home"
  get "user/:id", to: "users#show", as: "user"

  resources :rooms

  devise_for :users
  devise_scope :user do
    get "users", to: "devise/sessions#new"
  end
end
