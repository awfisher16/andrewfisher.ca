###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end

###
# Helpers
###

helpers do
  def external_link_to(body, url, html_options={})
    html_options[:target] ||= '_blank'
    html_options[:rel]    ||= 'external'
    link_to body, url, html_options
  end
end

###
# Settings
###

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'

# Build-specific configuration
configure :build do
  # activate :minify_css
  # activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end
