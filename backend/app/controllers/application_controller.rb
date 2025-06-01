class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :authenticate_request, except: [:google_oauth2]

  private

  def authenticate_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    
    begin
      decoded = JWT.decode(header, Rails.application.secret_key_base)[0]
      @current_user = User.find(decoded['user_id'])
    rescue JWT::DecodeError, ActiveRecord::RecordNotFound
      @current_user = nil
    end
  end

  def current_user
    @current_user
  end

  def require_authentication
    render json: { error: 'Unauthorized' }, status: :unauthorized unless current_user
  end
end
