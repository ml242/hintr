class UsersController < ApplicationController

  def oauth_failure
    # on OmniAuth error, create a flash error and redirect to the homepage
    flash[:error] = 'There was an issue connecting to facebook..'
    redirect_to :root
  end

  def load_hints
    user = User.find params[:user_id]

    user.scrape_facebook

    matches = Match.where(user_id: user.id)
    render json: matches
  end

end