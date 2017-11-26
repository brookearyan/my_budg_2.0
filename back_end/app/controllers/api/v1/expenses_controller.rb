class Api::V1::ExpensesController < ApplicationController
  def index
    @expenses = Expense.all
    render json: @expenses
  end

  def show
    @expense = Expense.find(params[:id])
    render json: @expense

  def update
    @expense = Expense.find(params[:id])

    @expense.update(expense_params)
    if @expense.save
      render json: @expense
    else
      render json: {errors: @expense.errors.full_messages}, status: 422
    end
  end

  private

  def expense_params
    params.permit(:title, :content)
  end

end
