class CreateBooks < ActiveRecord::Migration[8.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :isbn
      t.text :description
      t.string :cover_image_url
      t.date :published_date
      t.string :publisher
      t.integer :page_count

      t.timestamps
    end
  end
end
