class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :zipcode
      t.integer :income

      t.timestamps
    end
  end
end
