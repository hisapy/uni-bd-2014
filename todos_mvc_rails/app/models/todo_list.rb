class TodoList < ActiveRecord::Base
  attr_accessible :name
  belongs_to :user
  validates_presence_of :user
  has_many :todos
end
