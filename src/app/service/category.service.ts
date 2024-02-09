import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryData } from '../data/category-data';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {


constructor(private httpClient: HttpClient,
            private httpHandler: HttpHandler) { }

public getCategory(id: number):Observable <CategoryData>{
              return this.httpClient.get<CategoryData>('http://localhost:8080/getCategory/' + id);
            }

 public getAllCategories(): Observable<CategoryData[]> {
   return this.httpClient.get<CategoryData[]>('http://localhost:8080/getCategories');
 }

deleteCategory(id: number): Observable<any> {
  return this.httpClient.delete<any>('http://localhost:8080/deleteCategory/' + id);
}

public addCategory(categoryData: CategoryData): Observable<any>{
  return this.httpClient.post<any>('http://localhost:8080/addCategory', categoryData);
}

updateCategory(category:CategoryData): Observable<any> {
  return this.httpClient.put('http://localhost:8080/updateCategory', category)
}

// getCategoryById(id: number): CategoryData | undefined {
//   return this.categoryDataList.find(categoryData => categoryData.id === id);
// }


}
