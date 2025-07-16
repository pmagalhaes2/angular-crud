import { importProvidersFrom } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(MatSnackBarModule),
  ],
}).catch((err) => console.error(err));
