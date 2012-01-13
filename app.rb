require 'Twitter'
require 'padrino-helpers'

module TweetieTap
	class Application < Sinatra::Base
		register Padrino::Helpers
		
		set :user, 'jrcryer'
		set :tweet_count, 3

		get '/' do
			@tweets = Twitter.user_timeline(settings.user, {:count => settings.tweet_count})
			@user   = settings.user
			erb :index
		end
	end
end


