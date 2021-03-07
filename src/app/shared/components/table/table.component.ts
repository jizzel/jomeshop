import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  books: any = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            books {
              id
              name
              genre
              author {
                id
                name
                age
              }
            }
          }`,
      pollInterval: 1000
      })
    .valueChanges.subscribe((result: any) => {
      this.books = result?.data?.books;
      this.loading = result.loading;
      this.error = result.error;
      console.log(this.books);
    });
  }

}
