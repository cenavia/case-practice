import { Component, OnInit } from '@angular/core';

export interface UrlHistory {
  originalUrl: string;
  shortenedUrl: string;
  createdAt: string;
}

@Component({
  selector: 'url-short-list',
  templateUrl: './url-short-list.component.html',
  styleUrls: ['./url-short-list.component.sass']
})
export class UrlShortListComponent implements OnInit {
  displayedColumns: string[] = ['originalUrl', 'shortenedUrl', 'createdAt', 'action'];
  dataSource: UrlHistory[] = [];

  ngOnInit(): void {
    // Sample data - in a real app this would come from a service
    this.dataSource = [
      {
        originalUrl: 'https://qr-code-generator-21day.netlify.app/',
        shortenedUrl: 'https://bit.ly/3IcarMP',
        createdAt: '5/14/2023 12:31:44 AM'
      },
      {
        originalUrl: 'https://github.com/Vinishbhaskar/21-Day-Frontend-Challenge',
        shortenedUrl: 'https://bit.ly/42F0AYk',
        createdAt: '5/14/2023 12:31:32 AM'
      },
      {
        originalUrl: 'https://todo-application-21day-react.netlify.app/',
        shortenedUrl: 'https://bit.ly/42T6Gnr',
        createdAt: '5/14/2023 12:31:24 AM'
      },
      {
        originalUrl: 'https://url-shortener-21day.netlify.app/',
        shortenedUrl: 'https://bit.ly/3W0HVn6',
        createdAt: '5/14/2023 12:31:15 AM'
      }
    ];
  }

  copyToClipboard(url: string): void {
    navigator.clipboard.writeText(url).then(() => {
      console.log('URL copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  deleteItem(item: UrlHistory): void {
    // In a real app, this would call a service to delete the item from the database
    // For now, we just remove it from the local array
    const index = this.dataSource.findIndex(dataItem => 
      dataItem.shortenedUrl === item.shortenedUrl && 
      dataItem.originalUrl === item.originalUrl
    );
    
    if (index > -1) {
      this.dataSource.splice(index, 1);
      // Create a new array reference to trigger change detection
      this.dataSource = [...this.dataSource];
      console.log('Item deleted');
    }
  }
}
