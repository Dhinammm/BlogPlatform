Rails.application.routes.draw do
  get '/favicon.ico', to: ->(env) { [204, {}, []] }

  root "articles#index"
 
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
resources :articles  do
  resources :blog_comments
end
match '*unmatched', to: 'users#not_found', via: :all
get '/not_found', to: "users#not_found"
get '/users/details', to: "users#details"
end
