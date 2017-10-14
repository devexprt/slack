import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountingJsComponent } from './plugins/accounting-js';
import { AlertsComponent } from './notifications/alerts';
import { AngularCliComponent } from './documentation/angular-cli';
import { AnimationDelaysComponent } from './extras/animation-delays';
import { AvatarsComponent } from './extras/avatars';
import { BackdropsComponent } from './elements/backdrops';
import { BadgesComponent } from './ui-elements/badges';
import { BreadcrumbsComponent } from './ui-elements/breadcrumbs';
import { ButtonsComponent } from './ui-elements/buttons';
import { ChangelogComponent } from './documentation/changelog';
import { ChartistComponent } from './charts/chartist';
import { CodeStructureComponent } from './documentation/code-structure';
import { ComingSoonComponent } from './pages/coming-soon';
import { ContactUsComponent } from './pages/contact-us';
import { CreateAccountComponent } from './pages/create-account';
import { CreditsComponent } from './documentation/credits';
import { CustomizationComponent } from './documentation/customization';
import { DashboardComponent } from './dashboards/dashboard';
import { DatatableComponent } from './tables/datatable';
import { DefaultFormsComponent } from './forms/default-forms';
import { ValidationComponent } from './forms/validation';
import { StepsComponent } from './forms/steps';
import { DefaultTablesComponent } from './tables/default-tables';
import { DropdownsComponent } from './ui-elements/dropdowns';
import { EasyPieChartComponent } from './charts/easy-pie-chart';
import { EmptyPageComponent } from './pages/empty-page';
import { ErrorPageComponent } from './pages/error-page';
import { FileUploadsComponent } from './forms/file-uploads';
import { FlagsComponent } from './icons/flags';
import { FontAwesomeComponent } from './icons/font-awesome';
import { GoogleMapsComponent } from './maps/google-maps';
import { ImagesComponent } from './ui-elements/images';
import { InstallationComponent } from './documentation/installation';
import { IoniconsComponent } from './icons/ionicons';
import { JqueryTreegridComponent } from './tables/jquery-treegrid';
import { Jumbotron1Component } from './elements/jumbotron-1';
import { Jumbotron2Component } from './elements/jumbotron-2';
import { LayoutComponent } from './documentation/layout';
import { LeftSidebar1Component } from './elements/left-sidebar-1';
import { LeftSidebar2Component } from './elements/left-sidebar-2';
import { ListsComponent } from './ui-elements/lists';
import { LoginComponent } from './pages/login';
import { MaterialDesignIconsComponent } from './icons/material-design-icons';
import { ModalsComponent } from './notifications/modals';
import { MomentJsComponent } from './plugins/moment-js';
import { MorrisJsComponent } from './charts/morris-js';
import { Navbar1Component } from './elements/navbar-1';
import { Navbar2Component } from './elements/navbar-2';
import { Nvd3Component } from './charts/nvd3';
import { PaginationComponent } from './ui-elements/pagination';
import { PeityComponent } from './charts/peity';
import { PopoversComponent } from './notifications/popovers';
import { ProgressBarsComponent } from './ui-elements/progress-bars';
import { ResetPasswordComponent } from './pages/reset-password';
import { RightSidebar1Component } from './elements/right-sidebar-1';
import { SampleModalsComponent } from './elements/sample-modals';
import { SimpleLineIconsComponent } from './icons/simple-line-icons';
import { SlidersComponent } from './forms/sliders';
import { SocialMediaButtonsComponent } from './ui-elements/social-media-buttons';
import { StylesComponent } from './documentation/styles';
import { SubscribeComponent } from './pages/subscribe';
import { TableExportComponent } from './tables/table-export';
import { TabsComponent } from './ui-elements/tabs';
import { TooltipsComponent } from './notifications/tooltips';
import { TopNavigation1Component } from './elements/top-navigation-1';
import { TopNavigation2Component } from './elements/top-navigation-2';
import { TypographyComponent } from './ui-elements/typography';
import { UnderMaintenanceComponent } from './pages/under-maintenance';
import { UnlockAccountComponent } from './pages/unlock-account';
import { UserProfileComponent } from './pages/user-profile';
import { VectorMapsComponent } from './maps/vector-maps';
import { WeatherIconsComponent } from './icons/weather-icons';
import { CalendarComponent } from './apps/calendar';
import { SweetAlert2Component } from './notifications/sweet-alert-2';
import { ToastrComponent } from './notifications/toastr';
import { ActivityWidgetsComponent } from './widgets/activity-widgets';
import { AreaChartWidgetsComponent } from './widgets/area-chart-widgets';
import { BarChartWidgetsComponent } from './widgets/bar-chart-widgets';
import { DonutChartWidgetsComponent } from './widgets/donut-chart-widgets';
import { IconWidgetsComponent } from './widgets/icon-widgets';
import { LineChartWidgetsComponent } from './widgets/line-chart-widgets';
import { PieChartWidgetsComponent } from './widgets/pie-chart-widgets';
import { TableWidgetsComponent } from './widgets/table-widgets';
import { TextWidgetsComponent } from './widgets/text-widgets';
import { TimelineWidgetsComponent } from './widgets/timeline-widgets';
import { UserWidgetsComponent } from './widgets/user-widgets';
import { SidebarHeadingComponent } from './elements/sidebar-heading';
import { SidebarWidget1Component } from './elements/sidebar-widget-1';
import { SidebarWidget2Component } from './elements/sidebar-widget-2';
import { DropdownGridComponent } from './elements/dropdown-grid';
import { DropdownTasksComponent } from './elements/dropdown-tasks';
import { DropdownMessagesComponent } from './elements/dropdown-messages';
import { DropdownUserComponent } from './elements/dropdown-user';
import { DropdownFlagsComponent } from './elements/dropdown-flags';
import { DatepickerComponent } from './forms/datepicker';
import { CardsComponent } from './ui-elements/cards';
import { EmailComponent } from './email/email.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { CreatenameComponent } from './createname/createname.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { TeaminfoComponent } from './teaminfo/teaminfo.component';
import { TeamnameComponent } from './teamname/teamname.component';
import { CreateurlComponent } from './createurl/createurl.component';
import { CreateinvitesComponent } from './createinvites/createinvites.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ResetComponent } from './reset/reset.component';
import { AccountMembersComponent } from './account-members/account-members.component';
import { TransferOwnershipComponent } from './transfer-ownership/transfer-ownership.component';
import { SettingsPermissionsComponent } from './settings-permissions/settings-permissions.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { FilesComponent } from './files/files.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SweetAlert2Component,
    ToastrComponent,
    AccountingJsComponent,
    AlertsComponent,
    AngularCliComponent,
    AnimationDelaysComponent,
    AvatarsComponent,
    BackdropsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    ChangelogComponent,
    ChartistComponent,
    CodeStructureComponent,
    ComingSoonComponent,
    ContactUsComponent,
    CreateAccountComponent,
    CreditsComponent,
    CustomizationComponent,
    DashboardComponent,
    DatatableComponent,
    DefaultFormsComponent,
    ValidationComponent,
    StepsComponent,
    DefaultTablesComponent,
    DropdownsComponent,
    EasyPieChartComponent,
    EmptyPageComponent,
    ErrorPageComponent,
    FileUploadsComponent,
    FlagsComponent,
    FontAwesomeComponent,
    GoogleMapsComponent,
    ImagesComponent,
    InstallationComponent,
    IoniconsComponent,
    JqueryTreegridComponent,
    Jumbotron1Component,
    Jumbotron2Component,
    LayoutComponent,
    LeftSidebar1Component,
    LeftSidebar2Component,
    ListsComponent,
    LoginComponent,
    MaterialDesignIconsComponent,
    ModalsComponent,
    MomentJsComponent,
    MorrisJsComponent,
    Navbar1Component,
    Navbar2Component,
    Nvd3Component,
    PaginationComponent,
    PeityComponent,
    PopoversComponent,
    ProgressBarsComponent,
    ResetPasswordComponent,
    RightSidebar1Component,
    SampleModalsComponent,
    SimpleLineIconsComponent,
    SlidersComponent,
    SocialMediaButtonsComponent,
    StylesComponent,
    SubscribeComponent,
    TableExportComponent,
    TabsComponent,
    TooltipsComponent,
    TopNavigation1Component,
    TopNavigation2Component,
    TypographyComponent,
    UnderMaintenanceComponent,
    UnlockAccountComponent,
    UserProfileComponent,
    VectorMapsComponent,
    WeatherIconsComponent,
    ActivityWidgetsComponent,
    AreaChartWidgetsComponent,
    BarChartWidgetsComponent,
    DonutChartWidgetsComponent,
    IconWidgetsComponent,
    LineChartWidgetsComponent,
    PieChartWidgetsComponent,
    TableWidgetsComponent,
    TextWidgetsComponent,
    TimelineWidgetsComponent,
    UserWidgetsComponent,
    SidebarHeadingComponent,
    SidebarWidget1Component,
    SidebarWidget2Component,
    DropdownGridComponent,
    DropdownTasksComponent,
    DropdownMessagesComponent,
    DropdownUserComponent,
    DropdownFlagsComponent,
    DatepickerComponent,
    CardsComponent,
    EmailComponent,
    ConfirmemailComponent,
    CreatenameComponent,
    CreatepasswordComponent,
    TeaminfoComponent,
    TeamnameComponent,
    CreateurlComponent,
    CreateinvitesComponent,
    WelcomeComponent,
    AccountSettingsComponent,
    ResetComponent,
    AccountMembersComponent,
    TransferOwnershipComponent,
    SettingsPermissionsComponent,
    InvitationsComponent,
    FilesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: EmailComponent },
      { path: 'apps/calendar', component: CalendarComponent },
      { path: 'notifications/sweet-alert-2', component: SweetAlert2Component },
      { path: 'notifications/toastr', component: ToastrComponent },
      { path: 'charts/chartist', component: ChartistComponent },
      { path: 'charts/easy-pie-chart', component: EasyPieChartComponent },
      { path: 'charts/morris-js', component: MorrisJsComponent },
      { path: 'charts/nvd3', component: Nvd3Component },
      { path: 'charts/peity', component: PeityComponent },
      { path: 'dashboards/dashboard', component: DashboardComponent },
      { path: 'documentation/angular-cli', component: AngularCliComponent },
      { path: 'documentation/changelog', component: ChangelogComponent },
      { path: 'documentation/code-structure', component: CodeStructureComponent },
      { path: 'documentation/credits', component: CreditsComponent },
      { path: 'documentation/customization', component: CustomizationComponent },
      { path: 'documentation/installation', component: InstallationComponent },
      { path: 'documentation/layout', component: LayoutComponent },
      { path: 'documentation/styles', component: StylesComponent },
      { path: 'extras/animation-delays', component: AnimationDelaysComponent },
      { path: 'extras/avatars', component: AvatarsComponent },
      { path: 'forms/validation', component: ValidationComponent },
      { path: 'forms/steps', component: StepsComponent },
      { path: 'forms/default-forms', component: DefaultFormsComponent },
      { path: 'forms/file-uploads', component: FileUploadsComponent },
      { path: 'forms/sliders', component: SlidersComponent },
      { path: 'forms/datepicker', component: DatepickerComponent },
      { path: 'icons/flags', component: FlagsComponent },
      { path: 'icons/font-awesome', component: FontAwesomeComponent },
      { path: 'icons/ionicons', component: IoniconsComponent },
      { path: 'icons/material-design-icons', component: MaterialDesignIconsComponent },
      { path: 'icons/simple-line-icons', component: SimpleLineIconsComponent },
      { path: 'icons/weather-icons', component: WeatherIconsComponent },
      { path: 'maps/google-maps', component: GoogleMapsComponent },
      { path: 'maps/vector-maps', component: VectorMapsComponent },
      { path: 'notifications/alerts', component: AlertsComponent },
      { path: 'notifications/modals', component: ModalsComponent },
      { path: 'notifications/popovers', component: PopoversComponent },
      { path: 'notifications/tooltips', component: TooltipsComponent },
      { path: 'pages/coming-soon', component: ComingSoonComponent },
      { path: 'pages/contact-us', component: ContactUsComponent },
      { path: 'pages/create-account', component: CreateAccountComponent },
      { path: 'pages/empty-page', component: EmptyPageComponent },
      { path: 'pages/error-page', component: ErrorPageComponent },
      { path: 'pages/login', component: LoginComponent },
      { path: 'pages/reset-password', component: ResetPasswordComponent },
      { path: 'pages/subscribe', component: SubscribeComponent },
      { path: 'pages/under-maintenance', component: UnderMaintenanceComponent },
      { path: 'pages/unlock-account', component: UnlockAccountComponent },
      { path: 'pages/user-profile', component: UserProfileComponent },
      { path: 'plugins/accounting-js', component: AccountingJsComponent },
      { path: 'plugins/moment-js', component: MomentJsComponent },
      { path: 'tables/datatable', component: DatatableComponent },
      { path: 'tables/default-tables', component: DefaultTablesComponent },
      { path: 'tables/jquery-treegrid', component: JqueryTreegridComponent },
      { path: 'tables/table-export', component: TableExportComponent },
      { path: 'ui-elements/badges', component: BadgesComponent },
      { path: 'ui-elements/breadcrumbs', component: BreadcrumbsComponent },
      { path: 'ui-elements/buttons', component: ButtonsComponent },
      { path: 'ui-elements/cards', component: CardsComponent },
      { path: 'ui-elements/dropdowns', component: DropdownsComponent },
      { path: 'ui-elements/images', component: ImagesComponent },
      { path: 'ui-elements/lists', component: ListsComponent },
      { path: 'ui-elements/pagination', component: PaginationComponent },
      { path: 'ui-elements/progress-bars', component: ProgressBarsComponent },
      { path: 'ui-elements/social-media-buttons', component: SocialMediaButtonsComponent },
      { path: 'ui-elements/tabs', component: TabsComponent },
      { path: 'ui-elements/typography', component: TypographyComponent },
      { path: 'widgets/activity-widgets', component: ActivityWidgetsComponent },
      { path: 'widgets/area-chart-widgets', component: AreaChartWidgetsComponent },
      { path: 'widgets/bar-chart-widgets', component: BarChartWidgetsComponent },
      { path: 'widgets/donut-chart-widgets', component: DonutChartWidgetsComponent },
      { path: 'widgets/icon-widgets', component: IconWidgetsComponent },
      { path: 'widgets/line-chart-widgets', component: LineChartWidgetsComponent },
      { path: 'widgets/pie-chart-widgets', component: PieChartWidgetsComponent },
      { path: 'widgets/table-widgets', component: TableWidgetsComponent },
      { path: 'widgets/text-widgets', component: TextWidgetsComponent },
      { path: 'widgets/timeline-widgets', component: TimelineWidgetsComponent },
      { path: 'widgets/user-widgets', component: UserWidgetsComponent },
	    { path: 'email/email', component: EmailComponent },
	    { path: 'confirmemail/confirmemail', component: ConfirmemailComponent },	  
	    { path: 'createname/createname', component: CreatenameComponent },
	    { path: 'createpassword/createpassword', component: CreatepasswordComponent },
	    { path: 'createinvites/createinvites', component: CreateinvitesComponent},
	    { path: 'createurl/createurl', component: CreateurlComponent },
	    { path: 'teamname/teamname', component: TeamnameComponent },
	    { path: 'teaminfo/teaminfo', component: TeaminfoComponent },
      { path: 'welcome/welcome', component: WelcomeComponent },
      { path: 'account-settings/account-settings', component: AccountSettingsComponent },
      { path: 'reset/reset', component: ResetComponent },
      { path: 'account-members/account-members', component: AccountMembersComponent },
      { path: 'transfer-ownership/transfer-ownership', component: TransferOwnershipComponent },
      { path: 'settings-permissions/settings-permissions', component: SettingsPermissionsComponent },
      { path: 'invitations/invitations', component: InvitationsComponent },
	    { path: 'files/files', component: FilesComponent },
      { path: '**', component: ErrorPageComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }