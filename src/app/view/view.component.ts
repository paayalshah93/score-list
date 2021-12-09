import { Component, OnInit } from '@angular/core';
import { MarksListService } from '../services/marks-list.service';
import { MarksList } from '../Modals/marks-list.modal';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  name: string = '';
  public marks: MarksList[] = [];
  public marksTemp: MarksList[] = [];
  p: number = 1;

  constructor(private MarksList: MarksListService) { }

  ngOnInit(): void {
    this.MarksList.getMarksList()
      .subscribe((data: any) => {
        if (data) {
          data.scores.forEach((marks: any, i: number) => {
            this.marks.push({
              number: i,
              name: marks.name,
              score: this.alphabetPositionSum(marks.name)
            })
          });
          this.marksTemp = this.marks;
          this.marksTemp = this.marksTemp.sort((a, b) => 0 - (a.name > b.name ? -1 : 1));
        }
      });
  }

  /**
   * Function to multiply the score with the row number
   * @param score: The score calculated by the sum of the position of the Alphabet
   * @param p: The page number 
   * @param i: The index
   */
  getScore(score: number, p: number, i: number) {
    return (score * ((p - 1) * 10 + i + 1))
  }

  /**
   * Function to calculate the sum of the positions of all the alphabets in the name
   * @param text: name of the row
   */
  alphabetPositionSum(text: string) {
    var result = [];
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result.push((code - 64));
    }

    return result.reduce((acc, value) => value + acc, 0);;
  }


  /**
   * Function to sort the list in ascending order
   * @param sortBy : selected criteria for the columns to be sorted by
   */
  sortAscending(sortBy: string) {
    if (sortBy === 'name') {
      this.marksTemp = this.marksTemp.sort((a, b) => 0 - (a.name > b.name ? -1 : 1));
    } else if (sortBy === 'score') {
      this.marksTemp = this.marksTemp.sort((a, b) => 0 - (a.score > b.score ? -1 : 1));
    } else {
      this.marksTemp = this.marksTemp.sort((a, b) => 0 - (a.number > b.number ? -1 : 1));
    }
  }

   /**
   * Function to sort the list in descending order
   * @param sortBy : selected criteria for the columns to be sorted by
   */
  sortDescending(sortBy: string) {
    if (sortBy === 'name') {
      this.marksTemp = this.marksTemp.sort((a, b) => 0 - (a.name > b.name ? 1 : -1));
    } else if (sortBy === 'score') {
      this.marksTemp = this.marksTemp.sort((a, b) => 0 - (a.score > b.score ? 1 : -1));
    } else {
      this.marksTemp = this.marksTemp.sort((a, b) => 0 - (a.number > b.number ? 1 : -1));
    }
  }

  /**
   * Function to delete the selected row
   * @param score: the selected row details
   */
  deleteEntry(score: MarksList) {
    this.marksTemp = this.marksTemp.filter(value => value !== score);
  }

  /**
   * Function to search the name out of the list
   * @param value: The values entered within the textbox on every key stroke
   */
  search(value: any): void {
    console.log(value);
    const key = value.target.value;
    this.marksTemp = this.marks.filter((val) => val.name.toLowerCase().includes(key.toLowerCase()));
  }

  /**
   * Function to add new name to the list
   */
  addName() {
    this.marksTemp.push({
      number: this.marksTemp.length + 1,
      name: this.name,
      score: this.alphabetPositionSum(this.name)
    });
    this.marksTemp = this.marksTemp.sort((a, b) => 0 - (a.name > b.name ? -1 : 1));

  }
}
