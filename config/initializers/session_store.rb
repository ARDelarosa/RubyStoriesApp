Rails.application.config.session_store :cookie_store,
  key: "_stories_session",
  same_site: :lax,    # works on localhost http
  secure: Rails.env.production?, # only true in Render prod
  domain: nil         # use default domain in dev
