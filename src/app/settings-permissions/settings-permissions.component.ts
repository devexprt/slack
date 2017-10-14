import { Component, OnInit } from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-settings-permissions',
  templateUrl: './settings-permissions.component.html',
  styleUrls: ['./settings-permissions.component.scss']
})
export class SettingsPermissionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(".dropdown-menu li a").click(function(){
	  var selText = $(this).text();
	  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
  }

}
