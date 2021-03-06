import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'navbar-2',
  templateUrl: '../elements/navbar-2.html',
  styleUrls: ['../../styles/elements/navbar-2.scss']
})

export class Navbar2Component implements OnInit {

  constructor() {
  }

ngOnInit() {

  $("#toggleSide").click(function(){
    $("#left-sidebar2").toggleClass("displayToggle");
    $(".main-div").toggleClass("rgba-display");
  });



     
     
}

  toggleLayout(): void {
    const body = $('body');
    const collapsed = body.attr('data-collapsed') === 'true' ? true : false;
    body.attr('data-collapsed', !collapsed);
    const layout = body.attr('data-layout');
    if (layout === 'sidebar-over-1') {
      var backdrop = $('.left-sidebar-backdrop');
      if (backdrop.hasClass('in')) {
        backdrop.removeClass('fade');
        backdrop.removeClass('in');
      } else {
        backdrop.toggleClass('fade in');
      }
    }
  }

  toggleRightSidebar(): void {
    $('.right-sidebar-outer').toggleClass('show-from-right');
    if ($('.right-sidebar-outer').hasClass('show-from-right')) {
      $('.right-sidebar-backdrop').toggleClass('fade in');
    } else {
      $('.right-sidebar-backdrop')
        .removeClass('fade')
        .removeClass('in');
    }
  }

  toggleFullscreen(): void {
    const body = $('body');
    const value = body.attr('data-fullscreen') === 'true' ? true : false;
    body.attr('data-fullscreen', !value);
  }





}

