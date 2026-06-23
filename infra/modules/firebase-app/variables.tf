# Este archivo define las variables necesarias para configurar un proyecto de Firebase.
variable "project_id" {
  type        = string
  description = "ID único del proyecto GCP/Firebase"
}

variable "project_name" {
  type    = string
  default = ""
}

variable "region" {
  type    = string
  default = "us-central1"
}

variable "billing_account" {
  type        = string
  description = "ID de la cuenta de facturación (formato XXXXXX-XXXXXX-XXXXXX)"
}