require 'rubygems'
require 'bundler'
Bundler.setup

require 'sinatra'
require './app'
run TweetieTap::Application