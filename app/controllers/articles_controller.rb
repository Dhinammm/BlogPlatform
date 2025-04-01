class ArticlesController < ApplicationController
    def index
        @articles = Article.all
        respond_to do |format|
            format.html
            format.json{ render json: @articles }
        end
      end
      

    def show
        begin
            @article = Article.find(params[:id])
            @user = User.find(@article.user_id)
            @blogcomments = BlogComment.where(article_id: params[:id])
            @comment = BlogComment.new
        rescue
            not_found
        end
    end

    def new
        if current_user != User.find_by(id: params[:user_id])
           sign_out current_user
            redirect_to new_user_session_path
           return
      end
        @article = Article.new
    end

    def create
        @article = Article.new(create_params)
        if @article.save
            redirect_to @article
        else
            render :new, status: :unprocessable_entity
        end
    end

    def edit
        begin
            @article = Article.find(params[:id])
            user = User.find(@article.user_id)
            if current_user != user
                sign_out current_user
               redirect_to new_user_session_path
                return
            end
        rescue
            not_found
        end
    end

    def update
        @article = Article.find(params[:id])
        if @article.update(article_params)
            redirect_to @article
        else
            redirect_to @article
        end
    end

    def destroy
        begin
        article = Article.find(params[:id])
        user = User.find(article.user_id)
        if current_user != user
            sign_out current_user
            redirect_to new_user_session_path
            return
        end
        article.destroy
        redirect_to user_path(user)
        rescue
            not_found
        end
    end

    def not_found
        render file: Rails.public_path.join('404.html'), status: :not_found, layout: true
    end

    private

    def article_params
      params.require(:article).permit(:title, :content)
    end
    
    def create_params
        params.require(:article).permit(:title, :content, :user_id)
    end
end
