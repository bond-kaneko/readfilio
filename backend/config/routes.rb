Rails.application.routes.draw do
  # OAuth routes
  get '/auth/:provider/callback', to: 'api/v1/auth#google_oauth2'
  
  namespace :api do
    namespace :v1 do
      # Auth routes
      get 'auth/me', to: 'auth#me'
      delete 'auth/logout', to: 'auth#logout'
      
      get "readings/index"
      get "readings/show"
      get "readings/create"
      get "readings/update"
      get "readings/destroy"
      get "books/index"
      get "books/show"
      get "books/create"
      get "books/update"
      get "books/destroy"
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
