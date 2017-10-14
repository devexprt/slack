import { Component, OnInit } from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-account-members',
  templateUrl: './account-members.component.html',
  styleUrls: ['./account-members.component.scss']
})
export class AccountMembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  	$(".dropdown-menu li a").click(function(){
	  var selText = $(this).text();
	  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});

  }

}
