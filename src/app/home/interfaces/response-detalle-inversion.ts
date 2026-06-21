export interface ResponseDetalleInversion {
    sucess:  string;
    next:    string;
    records: DetalleInversion[];
    result:  Result;
    help:    string;
}

export interface Result {
    records_format:             string;
    include_total:              number;
    resource_id:                string;
    total_estimation_threshold: string;
    limit:                      string;
}

export interface DetalleInversion { 
  MONTO_VIABLE: string;              // Ej: "140250.0"
  CTRL_CONCURR: string;              // Ej: "0.0"
  NIVEL: string;                     // Ej: "GL"
  NOMBRE_UF: string;                 // Ej: "UF DE LA MUNICIPALIDAD..."
  PROVINCIA: string;                 // Ej: "JAUJA"
  SECTOR: string;                    // Ej: "GOBIERNOS LOCALES"
  PIM_ANIO_ACTUAL: string;           // Ej: "0"
  SEC_EJEC: string;                  // Ej: "301053"
  CODIGO_UNICO: string;              // Ej: "2572747"
  MONTO_FIANZA: string;              // Ej: "0.0"
  FEC_FIN_EJEC_FISICA: string;       // Ej: "2023-08-31 00:00:00"
  MONTO_LAUDO: string;               // Ej: "0.0"
  UBIGEO: string;                    // Ej: "120402"
  FECHA_REGISTRO: string;            // Ej: "2023-01-25 00:00:00"
  FEC_INI_EJEC_FISICA: string;       // Ej: "2023-02-01 00:00:00"
  PIA_ANIO_ACTUAL: string;           // Puede venir vacío ""
  ESTADO: string;                    // Ej: "ACTIVO"
  NOMBRE_INVERSION: string;          // Descripción larga de la obra
  ENTIDAD: string;                   // Ej: "MUNICIPALIDAD DISTRITAL DE ACOLLA"
  SITUACION: string;                 // Ej: "APROBADO"
  FEC_REG_F9: string;                // Puede venir vacío ""
  NOMBRE_OPMI: string;
  EXPEDIENTE_TECNICO: 'SI' | 'NO' | string;
  NOMBRE_UEI: string;
  PMI_ANIO_2: string;                // Puede venir vacío ""
  COMPROM_ANUAL_ANIO_ACTUAL: string; // Puede venir vacío ""
  PMI_ANIO_3: string;                // Puede venir vacío ""
  NUM_HABITANTES_BENEF: string;      // Puede venir vacío ""
  REGISTRADO_PMI: 'SI' | 'NO' | string;
  COSTO_ACTUALIZADO: string;         // Ej: "168500.0"
  FECHA_VIABILIDAD: string;          // Ej: "2023-01-25 00:00:00"
  MARCO: string;                     // Ej: "INVIERTE"
  PMI_ANIO_1: string;                // Puede venir vacío ""
  INFORME_CIERRE: 'SI' | 'NO' | string;
  ULT_FEC_DECLA_ESTIM: string;       // Ej: "2025-12-18 08:42:14"
  PMI_ANIO_4: string;                // Puede venir vacío ""
  AVANCE_FISICO: string;             // Ej: "100.0"
  CODIGO_SNIP: string;               // Ej: "2572747"
  TIENE_F12B: 'SI' | 'NO' | string;
  DEPARTAMENTO: string;              // Ej: "JUNIN"
  ETAPA_F9: string;                  // Puede venir vacío ""
  DES_TIPOLOGIA: string;             // Ej: "CARRETERAS VECINALES"
  ULTIMO_DEVENGADO: string;          // Ej: "202312"
  ALTERNATIVA: string;               // Puede venir vacío ""
  DEVEN_ACUMUL_ANIO_ANT: string;     // Ej: "149431.25"
  DISTRITO: string;                  // Ej: "ACOLLA"
  FEC_FIN_EJECUCION: string;         // Ej: "2023-01-15 00:00:00"
  DES_MODALIDAD: string;             // Ej: "ADMINISTRACIÓN INDIRECTA..."
  FEC_INI_EJECUCION: string;         // Ej: "2023-01-15 00:00:00"
  TIENE_AVAN_FISICO: 'SI' | 'NO' | string;
  TIENE_F8: 'SI' | 'NO' | string;
  PRIMER_DEVENGADO: string;          // Ej: "202305"
  PROGRAMA: string;                  // Ej: "TRANSPORTE TERRESTRE"
  TIENE_F9: 'SI' | 'NO' | string;
  AVANCE_EJECUCION: string;          // Ej: "97.92"
  ANIO_PROCESO: string;              // Ej: "2026"
  MONTO_ET_F8: string;               // Ej: "27000.0"
  TIPO_INVERSION: string;            // Ej: "INVERSIONES IOARR"
  NOMBRE_UEP: string;
  CERTIF_ANIO_ACTUAL: string;        // Puede venir vacío ""
  DEV_ANIO_ACTUAL: string;           // Ej: "0.0"
  SUBPROGRAMA: string;               // Ej: "VÍAS VECINALES"
  IND_IOARR_EMERG: 'SI' | 'NO' | string;
  SALDO_EJECUTAR: string;            // Ej: "19068.75"
  LONGITUD: string;                  // Coordenada en string
  FUNCION: string;                   // Ej: "TRANSPORTE"
  LATITUD: string;                   // Coordenada en string
  ETAPA_F8: string;                  // Ej: "Ejecución física (C)"
}