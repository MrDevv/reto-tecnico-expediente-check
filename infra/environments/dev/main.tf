# Este archivo es el que invoca el módulo y le pasa los valores.

# 1. Declara qué providers de Terraform usar (google y google-beta)
terraform {
  required_version = ">= 1.5"
  required_providers {
    google      = { source = "hashicorp/google", version = "~> 5.0" }
    google-beta = { source = "hashicorp/google-beta", version = "~> 5.0" }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
}

# 2. Declara las variables que va a recibir del .tfvars
variable "project_id" { type = string }
variable "project_name" { type = string }
variable "region" { type = string }
variable "billing_account" { type = string }

# 3. Llama al módulo pasándole esas variables
module "firebase_app" {
  source          = "../../modules/firebase-app"
  project_id      = var.project_id
  project_name    = var.project_name
  region          = var.region
  billing_account = var.billing_account
}

output "hosting_url" {
  value = module.firebase_app.hosting_url
}