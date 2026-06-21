output "project_id" {
  value = google_project.default.project_id
}

output "hosting_url" {
  value = "https://${google_firebase_hosting_site.default.site_id}.web.app"
}