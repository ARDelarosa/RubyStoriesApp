source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.4.4"

# Rails core
gem "rails", "~> 7.0.8"

# App server
gem "puma", "~> 6.4"

# Database (PostgreSQL for dev/test/prod)
gem "pg", "~> 1.5"

# Asset pipeline
gem "sprockets-rails", "~> 3.4.2"
gem "sassc-rails", "~> 2.1.2"

# Front-end defaults
gem "importmap-rails", "~> 1.0.1"
gem "turbo-rails", "~> 1.0.0"
gem "stimulus-rails", "~> 1.0.2"

# Utilities
gem "jbuilder", "~> 2.11.5"
gem "bcrypt", "~> 3.1.7"
gem "bootsnap", ">= 1.18", require: false

# Testing helpers pulled by Rails samples
gem "rails-controller-testing", "~> 1.0.0"

# Ensure a modern Nokogiri (fixes Ruby 3.4 incompatibilities via transitive deps)
gem "nokogiri", ">= 1.16"

# Windows time zone data (safe to keep)
gem "tzinfo-data", "~> 2.0.4", platforms: %i[mingw mswin x64_mingw jruby]

group :development do
  gem "web-console", "~> 4.2.0"
  gem "debug", "~> 1.4.0", platforms: %i[mri mingw x64_mingw]
end

group :test do
  gem "capybara", "~> 3.36.0"
  gem "selenium-webdriver", "~> 4.1.0"
  gem "webdrivers", "~> 5.0.0"
end
