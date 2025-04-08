class ArticlesController < ApplicationController
    def index
        @articles = Article.all
        respond_to do |format|
            format.html
            format.json {
                render json: {
                    articles: @articles.as_json(only: [:id, :title]),
                    current_user: current_user
                }, layout: false
            }
        end
    end

    def show
        begin
            @article = Article.find(params[:id])
            @user = User.find(@article.user_id)
            res = false
            current_user_id = nil
            @blogcomments = BlogComment.where(article_id: params[:id])

            user_not_logged = false
            if current_user.nil?
                user_not_logged = true
            else
                current_user_id = current_user.id
            end

            if current_user == @user
                res = true
            end

            respond_to do |format|
                format.html
                format.json {
                    render json: {
                        article: @article.as_json(only: [:id, :title, :content]),
                        res: res.as_json,
                        comments: @blogcomments.as_json,
                        user_not_logged: user_not_logged.as_json,
                        user: @user.as_json(only: [:name]),
                        current_user_id: current_user_id
                    }, layout: false
                }
            end
        rescue
            respond_to do |format|
                format.html
                format.json {
                    render json: { not_found: true }, layout: false
                }
            end
        end
    end

    def new
        if current_user
            @article = Article.new
        else
            redirect_to new_user_session_path
        end
    end

    def create
        begin
            res = false
            @article = Article.new(create_params)
            @article.user_id = current_user&.id

            if current_user.nil?
                res = true
            end

            if @article.save
                respond_to do |format|
                    format.html { redirect_to article_path(@article) }
                    format.json {
                        render json: {
                            article_id: @article.as_json(only: [:id])
                        }, layout: false
                    }
                end
            else
                respond_to do |format|
                    format.html { redirect_to new_user_session_path }
                    format.json {
                        render json: {
                            article_id: @article.as_json(only: [:id])
                        }, layout: false
                    }
                end
            end
        rescue
            not_found
        end
    end

    def edit
        begin
            @article = Article.find(params[:id])
            user = User.find(@article.user_id)
            if current_user != user
                sign_out current_user
                return
            end
        rescue
            not_found
        end
    end

    def update
        begin
            @article = Article.find(params[:id])
            response = "Article updated successfully"
            @article.update(article_params)
            respond_to do |format|
                format.html
                format.json {
                    render json: { response: response.as_json }
                }
            end
        rescue
            not_found
        end
    end

    def destroy
        begin
            article = Article.find(params[:id])
            user = User.find(article.user_id)

            if current_user.id != user.id
                not_found
                return
            end

            article.destroy
            response = "Article destroyed successfully"
            respond_to do |format|
                format.html
                format.json {
                    render json: { response: response.as_json }
                }
            end
        rescue
            not_found
        end
    end

    def not_found
    end

    private

    def article_params
        params.require(:article).permit(:id, :title, :content)
    end

    def create_params
        params.permit(:title, :content)
    end

    def delete_params
        params.permit(:id)
    end
end
