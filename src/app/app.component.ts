import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, HostListener } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

const TREE_DATA = [
  {
    name: 'Random Folder',
    type: 'Spaces',
    children: [
      { name: 'List 1' },
      { name: 'List 2' },
      { name: 'List 3' },
    ]
  }, {
    name: 'Spaces',
    type: 'Spaces',
    children: [
      {
        name: 'Projects',
        type: 'Projects',
        children: [
          { name: 'Broccoli' },
          {
            name: 'Events',
            type: 'Events',
            children: [
              { name: 'Broccoli' },
              {
                name: 'Bookings',
                type: 'Bookings',
                children: [
                  { name: 'Broccoli' },
                  { name: 'Brussels sprouts' },
                ]
              }
            ]
          }
        ]
      }
    ]
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addInput: string = '';
  dropdown: boolean = false;
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  value: any;
  searchText: string = '';
  @HostListener("document:click", ["$event"]) onDocumentClick(event: any) {
    this.dropdown = false;
  }
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  addNewInput() {

  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
}
