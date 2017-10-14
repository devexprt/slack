import { Injectable } from '@angular/core';

@Injectable()
export class FlagsService {

  icons: Array<any> = [{
    'code': 'ad',
    'name': 'Andorra'
  }, {
    'code': 'ae',
    'name': 'United Arab Emirates'
  }, {
    'code': 'af',
    'name': 'Afghanistan'
  }, {
    'code': 'ag',
    'name': 'Antigua and Barbuda'
  }, {
    'code': 'ai',
    'name': 'Anguilla'
  }, {
    'code': 'al',
    'name': 'Albania'
  }, {
    'code': 'am',
    'name': 'Armenia'
  }, {
    'code': 'ao',
    'name': 'Angola'
  }, {
    'code': 'aq',
    'name': 'Antarctica'
  }, {
    'code': 'ar',
    'name': 'Argentina'
  }, {
    'code': 'as',
    'name': 'American Samoa'
  }, {
    'code': 'at',
    'name': 'Austria'
  }, {
    'code': 'au',
    'name': 'Australia'
  }, {
    'code': 'aw',
    'name': 'Aruba'
  }, {
    'code': 'ax',
    'name': 'Aland Islands'
  }, {
    'code': 'az',
    'name': 'Azerbaijan'
  }, {
    'code': 'ba',
    'name': 'Bosnia and Herzegovina'
  }, {
    'code': 'bb',
    'name': 'Barbados'
  }, {
    'code': 'bd',
    'name': 'Bangladesh'
  }, {
    'code': 'be',
    'name': 'Belgium'
  }, {
    'code': 'bf',
    'name': 'Burkina Faso'
  }, {
    'code': 'bg',
    'name': 'Bulgaria'
  }, {
    'code': 'bh',
    'name': 'Bahrain'
  }, {
    'code': 'bi',
    'name': 'Burundi'
  }, {
    'code': 'bj',
    'name': 'Benin'
  }, {
    'code': 'bl',
    'name': 'Saint Barthélemy'
  }, {
    'code': 'bm',
    'name': 'Bermuda'
  }, {
    'code': 'bn',
    'name': 'Brunei Darussalam'
  }, {
    'code': 'bo',
    'name': 'Bolivia, Plurinational State of'
  }, {
    'code': 'bq',
    'name': 'Bonaire, Sint Eustatius and Saba'
  }, {
    'code': 'br',
    'name': 'Brazil'
  }, {
    'code': 'bs',
    'name': 'Bahamas'
  }, {
    'code': 'bt',
    'name': 'Bhutan'
  }, {
    'code': 'bv',
    'name': 'Bouvet Island'
  }, {
    'code': 'bw',
    'name': 'Botswana'
  }, {
    'code': 'by',
    'name': 'Belarus'
  }, {
    'code': 'bz',
    'name': 'Belize'
  }, {
    'code': 'ca',
    'name': 'Canada'
  }, {
    'code': 'cc',
    'name': 'Cocos (Keeling) Islands'
  }, {
    'code': 'cd',
    'name': 'Congo, the Democratic Republic of the'
  }, {
    'code': 'cf',
    'name': 'Central African Republic'
  }, {
    'code': 'cg',
    'name': 'Congo'
  }, {
    'code': 'ch',
    'name': 'Switzerland'
  }, {
    'code': 'ci',
    'name': 'Cote d\'Ivoire'
  }, {
    'code': 'ck',
    'name': 'Cook Islands'
  }, {
    'code': 'cl',
    'name': 'Chile'
  }, {
    'code': 'cm',
    'name': 'Cameroon'
  }, {
    'code': 'cn',
    'name': 'China'
  }, {
    'code': 'co',
    'name': 'Colombia'
  }, {
    'code': 'cr',
    'name': 'Costa Rica'
  }, {
    'code': 'cu',
    'name': 'Cuba'
  }, {
    'code': 'cv',
    'name': 'Cabo Verde'
  }, {
    'code': 'cw',
    'name': 'Curacao'
  }, {
    'code': 'cx',
    'name': 'Christmas Island'
  }, {
    'code': 'cy',
    'name': 'Cyprus'
  }, {
    'code': 'cz',
    'name': 'Czech Republic'
  }, {
    'code': 'de',
    'name': 'Germany'
  }, {
    'code': 'dj',
    'name': 'Djibouti'
  }, {
    'code': 'dk',
    'name': 'Denmark'
  }, {
    'code': 'dm',
    'name': 'Dominica'
  }, {
    'code': 'do',
    'name': 'Dominican Republic'
  }, {
    'code': 'dz',
    'name': 'Algeria'
  }, {
    'code': 'ec',
    'name': 'Ecuador'
  }, {
    'code': 'ee',
    'name': 'Estonia'
  }, {
    'code': 'eg',
    'name': 'Egypt'
  }, {
    'code': 'eh',
    'name': 'Western Sahara'
  }, {
    'code': 'er',
    'name': 'Eritrea'
  }, {
    'code': 'es',
    'name': 'Spain'
  }, {
    'code': 'et',
    'name': 'Ethiopia'
  }, {
    'code': 'fi',
    'name': 'Finland'
  }, {
    'code': 'fj',
    'name': 'Fiji'
  }, {
    'code': 'fk',
    'name': 'Falkland Islands (Malvinas)'
  }, {
    'code': 'fm',
    'name': 'Micronesia, Federated States of'
  }, {
    'code': 'fo',
    'name': 'Faroe Islands'
  }, {
    'code': 'fr',
    'name': 'France'
  }, {
    'code': 'ga',
    'name': 'Gabon'
  }, {
    'code': 'gb',
    'name': 'United Kingdom of Great Britain and Northern Ireland'
  }, {
    'code': 'gd',
    'name': 'Grenada'
  }, {
    'code': 'ge',
    'name': 'Georgia'
  }, {
    'code': 'gf',
    'name': 'French Guiana'
  }, {
    'code': 'gg',
    'name': 'Guernsey'
  }, {
    'code': 'gh',
    'name': 'Ghana'
  }, {
    'code': 'gi',
    'name': 'Gibraltar'
  }, {
    'code': 'gl',
    'name': 'Greenland'
  }, {
    'code': 'gm',
    'name': 'Gambia'
  }, {
    'code': 'gn',
    'name': 'Guinea'
  }, {
    'code': 'gp',
    'name': 'Guadeloupe'
  }, {
    'code': 'gq',
    'name': 'Equatorial Guinea'
  }, {
    'code': 'gr',
    'name': 'Greece'
  }, {
    'code': 'gs',
    'name': 'South Georgia and the South Sandwich Islands'
  }, {
    'code': 'gt',
    'name': 'Guatemala'
  }, {
    'code': 'gu',
    'name': 'Guam'
  }, {
    'code': 'gw',
    'name': 'Guinea-Bissau'
  }, {
    'code': 'gy',
    'name': 'Guyana'
  }, {
    'code': 'hk',
    'name': 'Hong Kong'
  }, {
    'code': 'hm',
    'name': 'Heard Island and McDonald Islands'
  }, {
    'code': 'hn',
    'name': 'Honduras'
  }, {
    'code': 'hr',
    'name': 'Croatia'
  }, {
    'code': 'ht',
    'name': 'Haiti'
  }, {
    'code': 'hu',
    'name': 'Hungary'
  }, {
    'code': 'id',
    'name': 'Indonesia'
  }, {
    'code': 'ie',
    'name': 'Ireland'
  }, {
    'code': 'il',
    'name': 'Israel'
  }, {
    'code': 'im',
    'name': 'Isle of Man'
  }, {
    'code': 'in',
    'name': 'India'
  }, {
    'code': 'io',
    'name': 'British Indian Ocean Territory'
  }, {
    'code': 'iq',
    'name': 'Iraq'
  }, {
    'code': 'ir',
    'name': 'Iran, Islamic Republic of'
  }, {
    'code': 'is',
    'name': 'Iceland'
  }, {
    'code': 'it',
    'name': 'Italy'
  }, {
    'code': 'je',
    'name': 'Jersey'
  }, {
    'code': 'jm',
    'name': 'Jamaica'
  }, {
    'code': 'jo',
    'name': 'Jordan'
  }, {
    'code': 'jp',
    'name': 'Japan'
  }, {
    'code': 'ke',
    'name': 'Kenya'
  }, {
    'code': 'kg',
    'name': 'Kyrgyzstan'
  }, {
    'code': 'kh',
    'name': 'Cambodia'
  }, {
    'code': 'ki',
    'name': 'Kiribati'
  }, {
    'code': 'km',
    'name': 'Comoros'
  }, {
    'code': 'kn',
    'name': 'Saint Kitts and Nevis'
  }, {
    'code': 'kp',
    'name': 'Korea, Democratic People\'s Republic of'
  }, {
    'code': 'kr',
    'name': 'Korea, Republic of'
  }, {
    'code': 'kw',
    'name': 'Kuwait'
  }, {
    'code': 'ky',
    'name': 'Cayman Islands'
  }, {
    'code': 'kz',
    'name': 'Kazakhstan'
  }, {
    'code': 'la',
    'name': 'Lao People\'s Democratic Republic'
  }, {
    'code': 'lb',
    'name': 'Lebanon'
  }, {
    'code': 'lc',
    'name': 'Saint Lucia'
  }, {
    'code': 'li',
    'name': 'Liechtenstein'
  }, {
    'code': 'lk',
    'name': 'Sri Lanka'
  }, {
    'code': 'lr',
    'name': 'Liberia'
  }, {
    'code': 'ls',
    'name': 'Lesotho'
  }, {
    'code': 'lt',
    'name': 'Lithuania'
  }, {
    'code': 'lu',
    'name': 'Luxembourg'
  }, {
    'code': 'lv',
    'name': 'Latvia'
  }, {
    'code': 'ly',
    'name': 'Libya'
  }, {
    'code': 'ma',
    'name': 'Morocco'
  }, {
    'code': 'mc',
    'name': 'Monaco'
  }, {
    'code': 'md',
    'name': 'Moldova, Republic of'
  }, {
    'code': 'me',
    'name': 'Montenegro'
  }, {
    'code': 'mf',
    'name': 'Saint Martin (French part)'
  }, {
    'code': 'mg',
    'name': 'Madagascar'
  }, {
    'code': 'mh',
    'name': 'Marshall Islands'
  }, {
    'code': 'mk',
    'name': 'Macedonia, the former Yugoslav Republic of'
  }, {
    'code': 'ml',
    'name': 'Mali'
  }, {
    'code': 'mm',
    'name': 'Myanmar'
  }, {
    'code': 'mn',
    'name': 'Mongolia'
  }, {
    'code': 'mo',
    'name': 'Macao'
  }, {
    'code': 'mp',
    'name': 'Northern Mariana Islands'
  }, {
    'code': 'mq',
    'name': 'Martinique'
  }, {
    'code': 'mr',
    'name': 'Mauritania'
  }, {
    'code': 'ms',
    'name': 'Montserrat'
  }, {
    'code': 'mt',
    'name': 'Malta'
  }, {
    'code': 'mu',
    'name': 'Mauritius'
  }, {
    'code': 'mv',
    'name': 'Maldives'
  }, {
    'code': 'mw',
    'name': 'Malawi'
  }, {
    'code': 'mx',
    'name': 'Mexico'
  }, {
    'code': 'my',
    'name': 'Malaysia'
  }, {
    'code': 'mz',
    'name': 'Mozambique'
  }, {
    'code': 'na',
    'name': 'Namibia'
  }, {
    'code': 'nc',
    'name': 'New Caledonia'
  }, {
    'code': 'ne',
    'name': 'Niger'
  }, {
    'code': 'nf',
    'name': 'Norfolk Island'
  }, {
    'code': 'ng',
    'name': 'Nigeria'
  }, {
    'code': 'ni',
    'name': 'Nicaragua'
  }, {
    'code': 'nl',
    'name': 'Netherlands'
  }, {
    'code': 'no',
    'name': 'Norway'
  }, {
    'code': 'np',
    'name': 'Nepal'
  }, {
    'code': 'nr',
    'name': 'Nauru'
  }, {
    'code': 'nu',
    'name': 'Niue'
  }, {
    'code': 'nz',
    'name': 'New Zealand'
  }, {
    'code': 'om',
    'name': 'Oman'
  }, {
    'code': 'pa',
    'name': 'Panama'
  }, {
    'code': 'pe',
    'name': 'Peru'
  }, {
    'code': 'pf',
    'name': 'French Polynesia'
  }, {
    'code': 'pg',
    'name': 'Papua New Guinea'
  }, {
    'code': 'ph',
    'name': 'Philippines'
  }, {
    'code': 'pk',
    'name': 'Pakistan'
  }, {
    'code': 'pl',
    'name': 'Poland'
  }, {
    'code': 'pm',
    'name': 'Saint Pierre and Miquelon'
  }, {
    'code': 'pn',
    'name': 'Pitcairn'
  }, {
    'code': 'pr',
    'name': 'Puerto Rico'
  }, {
    'code': 'ps',
    'name': 'Palestine, State of'
  }, {
    'code': 'pt',
    'name': 'Portugal'
  }, {
    'code': 'pw',
    'name': 'Palau'
  }, {
    'code': 'py',
    'name': 'Paraguay'
  }, {
    'code': 'qa',
    'name': 'Qatar'
  }, {
    'code': 're',
    'name': 'Reunion'
  }, {
    'code': 'ro',
    'name': 'Romania'
  }, {
    'code': 'rs',
    'name': 'Serbia'
  }, {
    'code': 'ru',
    'name': 'Russian Federation'
  }, {
    'code': 'rw',
    'name': 'Rwanda'
  }, {
    'code': 'sa',
    'name': 'Saudi Arabia'
  }, {
    'code': 'sb',
    'name': 'Solomon Islands'
  }, {
    'code': 'sc',
    'name': 'Seychelles'
  }, {
    'code': 'sd',
    'name': 'Sudan'
  }, {
    'code': 'se',
    'name': 'Sweden'
  }, {
    'code': 'sg',
    'name': 'Singapore'
  }, {
    'code': 'sh',
    'name': 'Saint Helena, Ascension and Tristan da Cunha'
  }, {
    'code': 'si',
    'name': 'Slovenia'
  }, {
    'code': 'sj',
    'name': 'Svalbard and Jan Mayen'
  }, {
    'code': 'sk',
    'name': 'Slovakia'
  }, {
    'code': 'sl',
    'name': 'Sierra Leone'
  }, {
    'code': 'sm',
    'name': 'San Marino'
  }, {
    'code': 'sn',
    'name': 'Senegal'
  }, {
    'code': 'so',
    'name': 'Somalia'
  }, {
    'code': 'sr',
    'name': 'Suriname'
  }, {
    'code': 'ss',
    'name': 'South Sudan'
  }, {
    'code': 'st',
    'name': 'Sao Tome and Principe'
  }, {
    'code': 'sv',
    'name': 'El Salvador'
  }, {
    'code': 'sx',
    'name': 'Sint Maarten (Dutch part)'
  }, {
    'code': 'sy',
    'name': 'Syrian Arab Republic'
  }, {
    'code': 'sz',
    'name': 'Swaziland'
  }, {
    'code': 'tc',
    'name': 'Turks and Caicos Islands'
  }, {
    'code': 'td',
    'name': 'Chad'
  }, {
    'code': 'tf',
    'name': 'French Southern Territories'
  }, {
    'code': 'tg',
    'name': 'Togo'
  }, {
    'code': 'th',
    'name': 'Thailand'
  }, {
    'code': 'tj',
    'name': 'Tajikistan'
  }, {
    'code': 'tk',
    'name': 'Tokelau'
  }, {
    'code': 'tl',
    'name': 'Timor-Leste'
  }, {
    'code': 'tm',
    'name': 'Turkmenistan'
  }, {
    'code': 'tn',
    'name': 'Tunisia'
  }, {
    'code': 'to',
    'name': 'Tonga'
  }, {
    'code': 'tr',
    'name': 'Turkey'
  }, {
    'code': 'tt',
    'name': 'Trinidad and Tobago'
  }, {
    'code': 'tv',
    'name': 'Tuvalu'
  }, {
    'code': 'tw',
    'name': 'Taiwan'
  }, {
    'code': 'tz',
    'name': 'Tanzania, United Republic of'
  }, {
    'code': 'ua',
    'name': 'Ukraine'
  }, {
    'code': 'ug',
    'name': 'Uganda'
  }, {
    'code': 'um',
    'name': 'United States Minor Outlying Islands'
  }, {
    'code': 'us',
    'name': 'United States of America'
  }, {
    'code': 'uy',
    'name': 'Uruguay'
  }, {
    'code': 'uz',
    'name': 'Uzbekistan'
  }, {
    'code': 'va',
    'name': 'Holy See'
  }, {
    'code': 'vc',
    'name': 'Saint Vincent and the Grenadines'
  }, {
    'code': 've',
    'name': 'Venezuela, Bolivarian Republic of'
  }, {
    'code': 'vg',
    'name': 'Virgin Islands, British'
  }, {
    'code': 'vi',
    'name': 'Virgin Islands, U.S.'
  }, {
    'code': 'vn',
    'name': 'Viet Nam'
  }, {
    'code': 'vu',
    'name': 'Vanuatu'
  }, {
    'code': 'wf',
    'name': 'Wallis and Futuna'
  }, {
    'code': 'ws',
    'name': 'Samoa'
  }, {
    'code': 'ye',
    'name': 'Yemen'
  }, {
    'code': 'yt',
    'name': 'Mayotte'
  }, {
    'code': 'za',
    'name': 'South Africa'
  }, {
    'code': 'zm',
    'name': 'Zambia'
  }, {
    'code': 'zw',
    'name': 'Zimbabwe'
  }];

  getIcons(): Array<string> {
    return this.icons;
  }
}
