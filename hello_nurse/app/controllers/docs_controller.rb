class DocsController < ApplicationController
  def show
    @doc = Doctor.find(params[:id])
    render json: @doc if request.xhr?
  end

  def index
  end
end
