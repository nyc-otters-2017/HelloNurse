class DocsController < ApplicationController
  def show
    @uid = params[:uid]
    render component: 'Individual', props: {uid: @uid}
  end

  def index
  end
end
