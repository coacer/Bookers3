class SearchHistoriesController < ApplicationController
  def index
    respond_to do |format|
      format.html { @search_histories = current_user.search_histories }
      format.js { @search_histories = sort_search_histories(params[:method].to_i) }
    end
  end

  def destroy
    @search_history = SearchHistory.find(params[:id])
    @search_history.destroy
    redirect_to user_search_histories_path(current_user)
  end

  private
    def sort_search_histories(method)
      case method
      when 0
        current_user.search_histories
      when 1
        current_user.search_histories.order :content
      end
    end
end
