class Todo < ActiveRecord::Base
  attr_accessible :description, :due_date
  belongs_to :todo_list
  validates_presence_of :todo_list
end