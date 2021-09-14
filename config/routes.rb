Rails.application.routes.draw do
  root to: "home#index"

  resources :sessions, only: [:new, :create, :destroy]
  resources :users

  get "signup", to: "users#new", as: "signup"
  get "login", to: "sessions#new", as: "login"
  get "logout", to: "sessions#destroy", as: "logout"
  get "privacy", to: "home#privacy"
  get "terms", to: "home#terms"
end