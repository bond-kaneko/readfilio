class CreateReadings < ActiveRecord::Migration[8.0]
  def change
    create_table :readings do |t|
      t.references :user, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true
      t.integer :status
      t.datetime :started_at
      t.datetime :finished_at
      t.integer :rating
      t.text :notes

      t.timestamps
    end
  end
end
