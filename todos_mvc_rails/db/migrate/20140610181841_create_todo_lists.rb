class CreateTodoLists < ActiveRecord::Migration
  def change
    create_table :todo_lists do |t|
      t.text :name

      t.timestamps
    end
  end
end
