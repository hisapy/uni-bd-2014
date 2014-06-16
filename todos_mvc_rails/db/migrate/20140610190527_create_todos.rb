class CreateTodos < ActiveRecord::Migration
  def up
    create_table :todos do |t|
      t.string :description
      t.integer :todo_list_id
      t.datetime :due_date

      t.timestamps
    end
  end

  def down
    drop_table :todos
  end
end
