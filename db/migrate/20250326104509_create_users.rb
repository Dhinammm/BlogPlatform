class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :encrypted_password, default: "", null: false
      t.string :reset_password_token
      t.datetime :remember_created_at
      t.datetime :reset_password_sent_at
      t.string :uid
      t.string :avatar_url
      t.string :provider
      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
