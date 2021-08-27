class TrainersController < ApplicationController
  before_action :set_trainer, only: [:show, :update, :edit, :destroy]

  def index
    @trainers = Trainer.all 
    render component: "Trainers", props: { trainers: @trainers }
  end

  def show
    render component: "Trainer", props: { trainer: @trainer }
  end

  def new
    @trainer = Trainer.new
    render component: "TrainerNew", props: { trainer: @trainer }
  end

  def create
    @trainer = Trainer.new(trainer_params)
    if @trainer.save
      redirect_to trainers_path
    else
      render :new
    end
  end

  def update
    if @trainer.update(trainer_params)
      redirect_to @trainer
    else
      render :edit
    end
  end

  def destroy
    @trainer.destroy
    redirect_to trainer_paths
  end

  private

  def set_trainer
    @trainer = Trainer.find(params[:id])
  end

  def trainer_params
    params.require(:trainer).permint(:name, :location)
  end
end
