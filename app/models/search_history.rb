class SearchHistory < ApplicationRecord
  belongs_to :user
  validates :content, presence: true
end
