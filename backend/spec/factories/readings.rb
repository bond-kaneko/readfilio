FactoryBot.define do
  factory :reading do
    user { nil }
    book { nil }
    status { 1 }
    started_at { "2025-06-01 22:19:12" }
    finished_at { "2025-06-01 22:19:12" }
    rating { 1 }
    notes { "MyText" }
  end
end
