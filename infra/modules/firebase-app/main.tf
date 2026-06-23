# Define que recursos de GCP/Firebase se crean

# proyecto GCP
resource "google_project" "default" {
  project_id      = var.project_id
  name            = coalesce(var.project_name, var.project_id)
  billing_account = var.billing_account
}

locals {
  apis = [
    "cloudfunctions.googleapis.com",
    "cloudbuild.googleapis.com",
    "run.googleapis.com",
    "artifactregistry.googleapis.com",
    "firebase.googleapis.com",
    "firebasehosting.googleapis.com",
    "cloudresourcemanager.googleapis.com",
  ]
}

# Habilita las APIs necesarias para Firebase
resource "google_project_service" "apis" {
  for_each = toset(local.apis)
  project  = google_project.default.project_id
  service  = each.value

  disable_on_destroy = false
}

# registra el proyecto como proyecto Firebase
resource "google_firebase_project" "default" {
  provider = google-beta
  project  = google_project.default.project_id

  depends_on = [google_project_service.apis]
}

# la web app de Firebase
resource "google_firebase_web_app" "default" {
  provider     = google-beta
  project      = google_project.default.project_id
  display_name = "${var.project_id} web"

  depends_on = [google_firebase_project.default]
}

# el sitio de hosting
resource "google_firebase_hosting_site" "default" {
  provider = google-beta
  project  = google_project.default.project_id
  site_id  = var.project_id

  depends_on = [google_firebase_project.default]
}