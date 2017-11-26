class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :name
      t.string :type
      t.integer :cost
      t.integer :user_id
      t.datetime :date

      t.timestamps
    end
  end
end
