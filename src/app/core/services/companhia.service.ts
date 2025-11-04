import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Companhia } from "../types/types";
import { Observable } from "rxjs";

export class CompanhiaService {
    private apiUrl: string = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }

    listar() : Observable<Companhia[]> {
        return this.httpClient.get<Companhia[]>(`${this.apiUrl}/companhias`)
    }
}