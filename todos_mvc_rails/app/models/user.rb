class User < ActiveRecord::Base
  attr_accessible :doc_id, :first_name, :last_name
  has_many :todo_lists
  has_many :todos, through: :todo_lists
end
