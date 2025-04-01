Rails.application.routes.draw do
  get '/favicon.ico', to: ->(env) { [204, {}, []] }

  root "articles#index"
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
resources :articles
end
