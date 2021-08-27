class StaticController < ApplicationController
  def index
    render component: "Home"
  end
end
