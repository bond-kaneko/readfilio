class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :google_id, presence: true, uniqueness: true
  validates :name, presence: true

  def self.from_omniauth(auth)
    where(google_id: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.name = auth.info.name
      user.google_id = auth.uid
      user.avatar_url = auth.info.image
    end
  end
end 