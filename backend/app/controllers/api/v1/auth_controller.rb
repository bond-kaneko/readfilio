class Api::V1::AuthController < ApplicationController
  skip_before_action :authenticate_request, only: [:google_oauth2]
  
  def google_oauth2
    frontend_url = ENV['FRONTEND_URL']
    raise "FRONTEND_URL environment variable is not set" if frontend_url.blank?
    
    user = User.from_omniauth(request.env["omniauth.auth"])
    
    if user.persisted?
      token = generate_jwt_token(user)
      redirect_to "#{frontend_url}/home?token=#{token}"
    else
      redirect_to "#{frontend_url}/auth/error"
    end
  end

  def me
    if current_user
      render json: {
        user: {
          id: current_user.id,
          email: current_user.email,
          name: current_user.name,
          avatar_url: current_user.avatar_url
        }
      }
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  def logout
    render json: { message: 'Logged out successfully' }
  end

  private

  def generate_jwt_token(user)
    payload = {
      user_id: user.id,
      exp: 24.hours.from_now.to_i
    }
    JWT.encode(payload, Rails.application.secret_key_base)
  end
end
