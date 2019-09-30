class CreateSearchHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :search_histories do |t|
      t.text :content
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
