FactoryBot.define do
  factory :book do
    title { "MyString" }
    author { "MyString" }
    isbn { "MyString" }
    description { "MyText" }
    cover_image_url { "MyString" }
    published_date { "2025-06-01" }
    publisher { "MyString" }
    page_count { 1 }
  end
end
