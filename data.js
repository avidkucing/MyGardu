import AsyncStorage from '@react-native-community/async-storage';

const garduName = [
  'GH. DPM',
  'GD. REST',
  'GH. BKY',
  'GH. DANS',
  'GD. PLL',
  'GD. SCC',
  'GD. PLWD',
  'GD. TGYS',
  'GD. IMCP',
  'GD. FUMC',
  'GD. KOMC',
  'GD. PAB',
  'GD. KNC',
  'GD. NCS',
  'GD. KUC',
  'GH. TMIK',
  'GD. NCRI',
  'GD. ALXD',
  'GH. KMI',
  'GD. TSMA',
  'GD. IDSW',
  'GD. CTH',
  'GD. TAN',
  'GD. SPU',
  'GD. ACON',
  'GD. ASIE',
  'GD. PLIL',
  'GD. KSN',
  'GD. MRIA',
  'GD. MNT',
  'GD. HKSN',
  'GD. ADK',
  'GD. ASHS',
  'GD. SHG',
  'GD. MAKS',
  'GD. BSKR',
  'GD. SAWC',
  'GD. BKMM',
  'GD. DWN',
  'GD. CKM',
  'GD. YGA',
  'GD. IJI',
  'GH. MNK',
  'GD. KBP',
  'GD. PIP',
  'GD. MKK',
  'GD. KJTP',
  'GD. MKML',
  'GD. NCIS',
  'GD. IRK',
  'GD. ASIP',
  'GD. AGL',
  'GD. ASFG',
  'GD. GCPU',
  'GD. KHIN',
  'MKJ',
  'BIPA',
  'KMN',
  'BDCA',
  'PYY',
  'TML',
  'PBIP',
  'CLK',
  'TREC',
  'TFR',
  'BFU',
  'MJT',
  'DST',
  'BKS',
  'DPTN',
  'WRK',
  'PPCA',
  'XJG',
  'HIJ',
  'PPC',
  'GPIC',
  'PWS',
  'SBJ',
  'PWSC',
  'PBT',
  'CBI',
  'BDC',
  'GPIH',
  'MKJB',
  'AZT',
  'CAL',
  'KMNA',
  'SPBG',
  'WMC',
  'BKSA',
  'PBIB',
  'PBIA',
  'BIPB',
  'PBIC',
  'BKSB',
  'BBR',
  'KMNB',
  'PYA',
  'PDL',
  'CBP',
  'WRQ',
  'WRP',
  'ADMX',
  'ITP',
  'PAR',
  'ICU',
  'ALIN',
  'PWSE',
  'SWE',
  'CEK',
  'GPIP',
  'MJE',
  'RCL',
  'SAM',
  'BFUA',
  'MJD',
  'CALB',
  'CALC',
  'RMA',
  'MJTA',
  'OKI',
  'PWSD',
  'PLAC',
  'DDI',
  'MSJ',
  'MSJA',
  'GKR',
  'GH. CKPK',
  'KHC',
  'KHA',
  'ANM',
  'FPUC',
  'SSL',
  'BRIC',
  'KAN',
  'YSC',
  'MAS',
  'PSC',
  'RTC',
  'BNIC',
  'SOC',
  'SLN',
  'KMJA',
  'SNJ',
  'RMIK',
  'EKKG',
  'MJB',
  'OCM KHD',
  'BRID',
  'GERB',
  'GERA',
  'PRCA',
  'PRCD',
  'KMJE',
  'KMJF',
  'GKP',
  'GKPA',
  'GKPB',
  'GKPC',
  'GKPD',
  'SKR',
  'SKRB',
  'SKRA',
  'PBI',
  'GER',
  'JMC',
  'MSR',
  'OCM JMV',
  'KHCB',
  'BCA',
  'YPMC',
  'KMJB',
  'KMJC',
  'KMJ',
  'KMJD',
  'KMPA',
  'KMPD',
  'KMPC',
  'KMMP',
  'KMPB',
  'PMI',
  'SMC',
  'GD. MGP',
  'EPK',
  'CALA',
  'TMG',
  'TMGA',
  'SBM',
  'PWSA',
  'IKS',
  'PWSB',
  'KSP',
  'BSP',
  'SWE',
  'TSM',
  'PWB',
  'WRU',
  'BSR',
  'BSRA',
  'BSRB',
  'KBD',
  'PWI',
  'BKD',
  'SCA',
  'SFR',
  'SOFA',
  'RRA',
  'RRB',
  'RRC',
  'SCB',
  'CPS',
  'BSHA',
  'BSHB',
  'KDD',
  'NSK',
  'NST',
  'KLWA',
  'TIS',
  'SAPS',
  'KLW',
  'KWK',
  'TIE',
  'TID',
  'TIC',
  'TIB',
  'TIA',
  'KSMA',
  'KSMB',
  'KSM',
  'KSG',
  'DKC',
  'KSK',
  'CBK',
  'KSC',
  'DDD',
  'BSC',
  'GMK',
  'BCK',
  'SJK',
  'SJKA',
  'PPWD',
  'PPW',
  'PPWA',
  'PPWB',
  'PPWE',
  'PPWC',
  'SPBB',
  'OCM KDJ',
  'SGR',
  'SGRA',
  'PGC',
  'PEV',
  'BSHC',
  'GPR',
  'GMS',
  'DSG',
  'GNR',
  'KDDA',
  'NSKA',
  'NSTA',
  'TISA',
  'KWKA',
  'TIG',
  'DKCA',
  'GMCA',
  'GMCB',
  'GMC',
  'CGM',
  'KJC',
  'CUT',
  'CBR',
  'GCA',
  'KRM',
  'CBRB',
  'WMB',
  'CBRC',
  'PREA',
  'GYC',
  'PVPC',
  'CTY',
  'CUTB',
  'KJN',
  'CUTA',
  'SMK',
  'PVPD',
  'GYPA',
  'GYP',
  'GYPB',
  'CUTD',
  'PVPE',
  'PPL',
  'CUTE',
  'GRKA',
  'GRK',
  'CUTC',
  'KRMA',
  'KBRC',
  'GKRI',
  'GKRJ',
  'GKRK',
  'GKWE',
  'GKWF',
  'GKWG',
  'GKW',
  'GKWA',
  'GKWB',
  'GKWH',
  'GKWC',
  'GKWD',
  'CGMA',
  'CGMC',
  'RCC',
  'KTT',
  'KPK',
  'PPD',
  'PJT',
  'KWD',
  'KWPC',
  'KWPE',
  'VIPD',
  'BKK',
  'BKKA',
  'EIS',
  'EISA',
  'TMS',
  'TMSA',
  'PCKC',
  'DPUA',
  'DPU',
  'DPUB',
  'KBR',
  'KBRA',
  'PPAC',
  'TRRC',
  'PKBC',
  'PCP',
  'CGMB',
  'CBRD',
  'CBRA',
  'WMD',
  'BSKB',
  'GD. PJKA',
  'GD. VNW',
  'GD. IZZA',
  'MPCB',
  'KPS',
  'PRC',
  'PRCB',
  'PRCC',
  'PTC',
  'KDP',
  'KBM',
  'TDKA',
  'TDK',
  'JJS',
  'BBM',
  'KLY',
  'KBPC',
  'KBPD',
  'KBPE',
  'KBPF',
  'KBPI',
  'KBPH',
  'KBPG',
  'BKO',
  'BKOA',
  'SGP',
  'SGPA',
  'CPR',
  'CPRA',
  'CPRB',
  'WME',
  'WMF',
  'MRP',
  'KEK',
  'KEM',
  'WMA',
  'PMKC',
  'GYSC',
  'PMHA',
  'PMHB',
  'PMHC',
  'GMI',
  'BKBB',
  'BKBI',
  'BKBA',
  'WTA',
  'BKBH',
  'BKBE',
  'BKBF',
  'BKBD',
  'BKBC',
  'BKBG',
  'PGLA',
  'PGLE',
  'PGLC',
  'PGLF',
  'PBP',
  'PLBB',
  'WTO',
  'EMSP',
  'PEM',
  'PLBA',
  'GVRA',
  'GVR',
  'CBB',
  'CBC',
  'SGN',
  'OCM ATP',
  'PLBE',
];

const garduLong = [
  '107.4072646',
  '107.3919203',
  '107.4004543',
  '107.406526',
  '107.4072646',
  '107.4009315',
  '107.2398956',
  '107.4412548',
  '107.4428749',
  '107.441985',
  '107.4409249',
  '107.253932',
  '107.4329346',
  '107.4315753',
  '107.4314638',
  '107.4471101',
  '107.439463',
  '107.441258',
  '107.3926518',
  '107.416798',
  '107.4051529',
  '107.4051529',
  '107.3997248',
  '107.4433866',
  '107.4429525',
  '107.4435584',
  '107.4432044',
  '107.4175449',
  '107.2741598',
  '107.4340569',
  '107.4396555',
  '107.4385083',
  '107.409874',
  '107.4798559',
  '107494719',
  '107499354',
  '107499280',
  '107468861',
  '107.4383777',
  '107.4466774',
  '107.4558496',
  '107.463851',
  '107.4346702',
  '107.371088',
  '107.4309443',
  '107.4340349',
  '107434672',
  '107440109',
  '107439327',
  '107.4406215',
  '107.4430043',
  '107.4425161',
  '107409874',
  '107.4244499',
  '107.4327846',
  '107.3978131',
  '107.4167463',
  '107.4130554',
  '107.422664',
  '107.4175009',
  '107.398881',
  '107.4175205',
  '107.4089909',
  '107.4085885',
  '107.400686',
  '107.3991549',
  '107.3845798',
  '107.3996129',
  '107.4264703',
  '107.4244356',
  '107.4164012',
  '107.4159831',
  '107.4020887',
  '107.422283',
  '107.4159036',
  '107.4132627',
  '107.4087701',
  '107.4074981',
  '107.4067847',
  '107.4059021',
  '107.4278267',
  '107.4240281',
  '107.4105743',
  '107.3995672',
  '107.401663',
  '107.393439',
  '107.4158572',
  '107.4267607',
  '107.4186508',
  '107.4240452',
  '107.4162607',
  '107.4162083',
  '107.4159561',
  '107.4168482',
  '107.4277427',
  '107.4231913',
  '107.4180923',
  '107.4187026',
  '107.4289085',
  '107.4228634',
  '107.4214321',
  '107.4176857',
  '107.4213625',
  '107.4210056',
  '107.4149614',
  '107.4172374',
  '107.4130242',
  '107.4119931',
  '107.4122405',
  '107.4071119',
  '107.4138211',
  '107.3991659',
  '107.3985741',
  '107.3990127',
  '107.3990702',
  '107.3911226',
  '107.3924894',
  '107.3943882',
  '107.3892604',
  '107.3883034',
  '107.4120348',
  '107.4067066',
  '107.4029775',
  '107.3815935',
  '107.3852246',
  '107.3840896',
  '107.410681',
  '107.4641899',
  '107.443531535',
  '107.443244021',
  '107.45621177',
  '107.440876174',
  '107.458001937',
  '107.453231855',
  '107.454227859',
  '107.45023273',
  '107.443847745',
  '107.450801848',
  '107.459354174',
  '107.457090495',
  '107.460169827',
  '107.447492528',
  '107.454301004',
  '107.431609414',
  '107.442489732',
  '107.443679462',
  '107.43861081',
  '107.444014566',
  '107.447951764',
  '107.446765034',
  '107.448868628',
  '107.457572191',
  '107.458833341',
  '107.451797811',
  '107.450974517',
  '107.458571193',
  '107.45893763',
  '107.459313585',
  '107.461707323',
  '107.462549652',
  '107.458947148',
  '107.460588976',
  '107.460253472',
  '107.443533673',
  '107.448958572',
  '107.424563666',
  '107.42905014',
  '107.440994064',
  '107.443604215',
  '107.451876321',
  '107.452931839',
  '107.456629',
  '107.450519084',
  '107.454655678',
  '107.454671',
  '107.454342',
  '107.452936',
  '107.451895',
  '107.454683944',
  '107.452596191',
  '107.453121507',
  '107.459567825',
  '107.4529523',
  '107.393704',
  '107.39513',
  '107.402273',
  '107.4078263',
  '107.4076866',
  '107.404969',
  '107.406371',
  '107.40826',
  '107.4094932',
  '107.413164',
  '107.4152621',
  '107.4166417',
  '107.4175085',
  '107.416937',
  '107.416759',
  '107.415605',
  '107.415533',
  '107.416802',
  '107.417987',
  '107.4196979',
  '107.416367',
  '107.41395',
  '107.414851',
  '107.413115',
  '107.412513',
  '107.411056',
  '107.412422',
  '107.40798',
  '107.415364',
  '107.414542',
  '107.421643',
  '107.42377',
  '107.427233',
  '107.436766',
  '107.434716',
  '107.442836',
  '107.440329',
  '107.418825',
  '107.425604',
  '107.424516',
  '107.424825',
  '107.429287',
  '107.435248',
  '107.438791',
  '107.441758',
  '107.441857',
  '107.44353',
  '107.443087',
  '107.440866',
  '107.439832',
  '107.444414',
  '107.450619',
  '107.452646',
  '107.454197',
  '107.451876',
  '107.462328',
  '107.46889',
  '107.423012',
  '107.423129',
  '107.421557',
  '107.421825',
  '107.424113',
  '107.423384',
  '107.424416',
  '107.4145731',
  '107.400092',
  '107.399924',
  '107.404529',
  '107.402373',
  '107.416371',
  '107.410486',
  '107.41344',
  '107.414289',
  '107.41844',
  '107.420125',
  '107.423034',
  '107.428164',
  '107.433127',
  '107.421108',
  '107.426422',
  '107.446631',
  '107.45236',
  '107.451054',
  '107.452244',
  '107.466806',
  '107.459003458',
  '107.461086078',
  '107.466218614',
  '107.465437534',
  '107.46880401',
  '107.465124121',
  '107.478245736',
  '107.464799568',
  '107.463282003',
  '107.466442753',
  '107.462210384',
  '107.468436464',
  '107.464858613',
  '107.457767578',
  '107.463776998',
  '107.464210979',
  '107.462660489',
  '107.466435769',
  '107.466462419',
  '107.465963684',
  '107.461652767',
  '107.460092497',
  '107.460282854',
  '107.463086965',
  '107.465485198',
  '107.467456357',
  '107.462975894',
  '107.46663506',
  '107.472296797',
  '107.47504158',
  '107.474930669',
  '107.47355653',
  '107.474979093',
  '107.473795311',
  '107.472700759',
  '107.476075294',
  '107.476031396',
  '107.476746292',
  '107.475710613',
  '107.476511588',
  '107.474590499',
  '107.467050234',
  '107.46850443',
  '107.431091914',
  '107.431783268',
  '107.434176462',
  '107.433764611',
  '107.435324635',
  '107.442567332',
  '107.443657035',
  '107.443770875',
  '107.449234522',
  '107.450739378',
  '107.454014793',
  '107.459872109',
  '107.460439711',
  '107.462612015',
  '107.46211',
  '107.468563794',
  '107.469168874',
  '107.468793781',
  '107.468134683',
  '107.467818215',
  '107.468034746',
  '107.475053856',
  '107.475866618',
  '107.478205693',
  '107.465782279',
  '107.466806',
  '107.465474355',
  '107.465315825',
  '107.475986519',
  '107.427537',
  '107.45922',
  '107.4627',
  '107.466502',
  '107.46479400000',
  '107.46247700000',
  '107.46116800000',
  '107.46095300000',
  '107.46088000000',
  '107.46377500000',
  '107.46542502300',
  '107.46877800000',
  '107.46841300000',
  '107.46923000000',
  '107.47287600000',
  '107.47614700000',
  '107.47485000000',
  '107.47400500000',
  '107.47320200000',
  '107.47238900000',
  '107.47216100000',
  '107.47162500000',
  '107.47194500000',
  '107.47227600000',
  '107.47748800000',
  '107.47894300000',
  '107.47991800000',
  '107.47893200000',
  '107.48009500000',
  '107.48038100000',
  '107.47882600000',
  '107.48043500000',
  '107.48041600000',
  '107.49019600000',
  '107.49294200000',
  '107.48847000000',
  '107.48070200000',
  '107.48339900000',
  '107.48176000000',
  '107.48420500000',
  '107.48356100000',
  '107.48452900000',
  '107.48718300000',
  '107.48463300000',
  '107.48484200000',
  '107.48537100000',
  '107.48699000000',
  '107.48815700000',
  '107.48836600000',
  '107.48846200000',
  '107.48851000000',
  '107.48857800000',
  '107.48861700000',
  '107.48975800000',
  '107.48987500000',
  '107.49211500000',
  '107.49079800000',
  '107.49495800000',
  '107.49567300000',
  '107.49385500000',
  '107.49461200000',
  '107.49599800000',
  '107.50019300000',
  '107.49782800000',
  '107.49773900000',
  '107.49736000000',
  '107.49800500000',
  '107.49862700000',
  '107.47475300000',
  '107.49603000000',
];

const garduLat = [
  '-6.383390004',
  '-6.38716845',
  '-6.384510006',
  '-6.388593218',
  '-6.383390004',
  '-6.382130018',
  '-6.008032756',
  '-6.399630003',
  '-6.405600002',
  '-6.408090004',
  '-6.408510003',
  '-6.097473991',
  '-6.406170003',
  '-6.407416944',
  '-6.408593571',
  '-6.424739844',
  '-6.411661',
  '-6.420567',
  '-6.379149956',
  '-6.417958',
  '-6.390867636',
  '-6.390867636',
  '-6.386130003',
  '-6.409815146',
  '-6.408649381',
  '-6.405850033',
  '-6.406984918',
  '-6.388550002',
  '-6.377433259',
  '-6.412449276',
  '-6.412410544',
  '-6.412056007',
  '-6.402507',
  '-6.42670136',
  '-6429390',
  '-6431849',
  '-6431835',
  '-6417958',
  '-6.397763662',
  '-6.401317168',
  '-6.406499003',
  '-6.409315546',
  '-6.410859792',
  '-6.368230022',
  '-6.40962719',
  '-6.410600002',
  '-6409507',
  '-6413915',
  '-6415366',
  '-6.413700018',
  '-6.404495405',
  '-6.410986261',
  '-6402507',
  '-6.408047963',
  '-6.422840373',
  '-6.395868426',
  '-6.406495679',
  '-6.409415765',
  '-6.396680104',
  '-6.404394043',
  '-6.385447076',
  '-6.407254587',
  '-6.396895998',
  '-6.392178154',
  '-6.413917984',
  '-6.418870048',
  '-6.39703396',
  '-6.387351102',
  '-6.39838024',
  '-6.391718104',
  '-6.389244309',
  '-6.395092018',
  '-6.398355583',
  '-6.39460314',
  '-6.396117759',
  '-6.400496898',
  '-6.388827341',
  '-6.389650999',
  '-6.3911505',
  '-6.389463024',
  '-6.393060634',
  '-6.391314759',
  '-6.397120085',
  '-6.402590118',
  '-6.387169028',
  '-6.380648989',
  '-6.41033105',
  '-6.39242814',
  '-6.403556408',
  '-6.400427801',
  '-6.407033424',
  '-6.407308252',
  '-6.408026849',
  '-6.405550544',
  '-6.398073825',
  '-6.396876172',
  '-6.411953217',
  '-6.407342151',
  '-6.395316442',
  '-6.390882685',
  '-6.390301859',
  '-6.389457983',
  '-6.391353878',
  '-6.391952312',
  '-6.400980909',
  '-6.389352991',
  '-6.392734999',
  '-6.394097604',
  '-6.394920539',
  '-6.3906864',
  '-6.40014999',
  '-6.393512594',
  '-6.405883249',
  '-6.40357698',
  '-6.419071351',
  '-6.390378053',
  '-6.384187013',
  '-6.385080739',
  '-6.39554573',
  '-6.395558923',
  '-6.38948316',
  '-6.394992429',
  '-6.392022861',
  '-6.396942399',
  '-6.395906096',
  '-6.395986997',
  '-6.395286',
  '-6.412151804',
  '-6.40067247334',
  '-6.41123726617',
  '-6.41034896629',
  '-6.42052805751',
  '-6.40766979474',
  '-6.40490923177',
  '-6.40772608124',
  '-6.40367133386',
  '-6.40632003521',
  '-6.40571874232',
  '-6.40864981006',
  '-6.40688469088',
  '-6.40865845866',
  '-6.40212345121',
  '-6.4172890327',
  '-6.42328876435',
  '-6.41140144898',
  '-6.41215454839',
  '-6.40137679378',
  '-6.40084617399',
  '-6.40226502914',
  '-6.40613201243',
  '-6.40541039254',
  '-6.40980810962',
  '-6.41356599742',
  '-6.41726523809',
  '-6.41722240779',
  '-6.42609229221',
  '-6.4264587292',
  '-6.42695365709',
  '-6.42599235484',
  '-6.42530707007',
  '-6.42835278016',
  '-6.42974476485',
  '-6.42935929217',
  '-6.40787529366',
  '-6.40521908388',
  '-6.42294109216',
  '-6.42578097887',
  '-6.40967650308',
  '-6.40000976033',
  '-6.40454801588',
  '-6.4051309007',
  '-6.418337',
  '-6.41708206422',
  '-6.41926952578',
  '-6.422127',
  '-6.422618',
  '-6.422277',
  '-6.422001',
  '-6.42584377217',
  '-6.43065290306',
  '-6.43123040899',
  '-6.40820285944',
  '-6.40969707',
  '-6.380616003',
  '-6.382190958',
  '-6.387219956',
  '-6.382916555',
  '-6.381645782',
  '-6.388083995',
  '-6.388393987',
  '-6.388620006',
  '-6.386220464',
  '-6.387251494',
  '-6.388697422',
  '-6.387410912',
  '-6.38438038',
  '-6.387484997',
  '-6.380699',
  '-6.380726',
  '-6.381197',
  '-6.381782998',
  '-6.382054',
  '-6.381626317',
  '-6.373659007',
  '-6.374317',
  '-6.37408',
  '-6.372573',
  '-6.373034',
  '-6.372974',
  '-6.369947',
  '-6.369103',
  '-6.36956',
  '-6.368425',
  '-6.352421969',
  '-6.347658039',
  '-6.34641196',
  '-6.343376',
  '-6.346955965',
  '-6.347437392',
  '-6.337935971',
  '-6.36044298',
  '-6.363050007',
  '-6.366101017',
  '-6.372174016',
  '-6.366177985',
  '-6.367930958',
  '-6.371426',
  '-6.375294',
  '-6.367005045',
  '-6.360141',
  '-6.365345041',
  '-6.37720403',
  '-6.383843017',
  '-6.374801997',
  '-6.376380985',
  '-6.370056',
  '-6.360797',
  '-6.35884',
  '-6.374480985',
  '-6.373347014',
  '-6.389521',
  '-6.389283',
  '-6.388718',
  '-6.388166',
  '-6.389243',
  '-6.388439',
  '-6.39084903',
  '-6.388643817',
  '-6.372602',
  '-6.37378',
  '-6.365792',
  '-6.367454',
  '-6.369013',
  '-6.366688',
  '-6.365986',
  '-6.361935',
  '-6.355163',
  '-6.356441974',
  '-6.348628019',
  '-6.346489013',
  '-6.34327597',
  '-6.36174302',
  '-6.364158001',
  '-6.366329',
  '-6.379188',
  '-6.378822',
  '-6.379933',
  '-6.39101700322',
  '-6.40431324368',
  '-6.40032041457',
  '-6.38850127246',
  '-6.39168685063',
  '-6.39682586393',
  '-6.38821404293',
  '-6.39182095876',
  '-6.38866543122',
  '-6.39018314476',
  '-6.39432560419',
  '-6.39326457055',
  '-6.39385329391',
  '-6.39485286691',
  '-6.40208920999',
  '-6.39695147682',
  '-6.3910727289',
  '-6.39171232943',
  '-6.40121779743',
  '-6.40031740939',
  '-6.39987911267',
  '-6.40127699211',
  '-6.3953471313',
  '-6.39541851513',
  '-6.39708688612',
  '-6.39927024907',
  '-6.39920266152',
  '-6.3964020851',
  '-6.39598786937',
  '-6.39520990485',
  '-6.39053512671',
  '-6.38975937765',
  '-6.38919425566',
  '-6.38886695567',
  '-6.38835537155',
  '-6.38789137666',
  '-6.38874267989',
  '-6.38747734012',
  '-6.38582992508',
  '-6.3845111548',
  '-6.38351913087',
  '-6.38305648081',
  '-6.39107140406',
  '-6.39165412094',
  '-6.39536053869',
  '-6.39568701254',
  '-6.39655412998',
  '-6.39960407205',
  '-6.40080684046',
  '-6.39715814756',
  '-6.39806902046',
  '-6.39779069643',
  '-6.40166860838',
  '-6.40232711659',
  '-6.40384275826',
  '-6.40622724222',
  '-6.40649834598',
  '-6.39543373368',
  '-6.396071',
  '-6.39584351661',
  '-6.39966736752',
  '-6.40078872826',
  '-6.4009616576',
  '-6.40168977266',
  '-6.40116391178',
  '-6.39526588911',
  '-6.39981053905',
  '-6.40003365042',
  '-6.39093941396',
  '-6.39101700322',
  '-6.38816981257',
  '-6.38793402031',
  '-6.39679723307',
  '-6.397805',
  '-6.406216',
  '-6.407467',
  '-6.390019',
  '-6.41160400000',
  '-6.40953000000',
  '-6.40960900000',
  '-6.40998900000',
  '-6.40993500000',
  '-6.40888200000',
  '-6.40618100492',
  '-6.40845100000',
  '-6.40908600000',
  '-6.40928000000',
  '-6.40948900000',
  '-6.40969900000',
  '-6.40637900000',
  '-6.40446400000',
  '-6.40364700000',
  '-6.40287500000',
  '-6.40254700000',
  '-6.40401900000',
  '-6.40472400000',
  '-6.40319800000',
  '-6.40478100000',
  '-6.40523400000',
  '-6.40592700000',
  '-6.40701000000',
  '-6.39482800000',
  '-6.39379700000',
  '-6.39337700000',
  '-6.39071600000',
  '-6.38545000000',
  '-6.37111400000',
  '-6.35813700000',
  '-6.36310300000',
  '-6.39652600000',
  '-6.39828700000',
  '-6.40227700000',
  '-6.39617100000',
  '-6.39473200000',
  '-6.39165700000',
  '-6.39221400000',
  '-6.39835200000',
  '-6.39961900000',
  '-6.40045100000',
  '-6.39534200000',
  '-6.39729200000',
  '-6.39654900000',
  '-6.39624200000',
  '-6.39604800000',
  '-6.39583400000',
  '-6.39562800000',
  '-6.40017700000',
  '-6.40096500000',
  '-6.40052300000',
  '-6.39921600000',
  '-6.39831400000',
  '-6.39718600000',
  '-6.39342200000',
  '-6.39263600000',
  '-6.38993800000',
  '-6.39036200000',
  '-6.38917500000',
  '-6.39011600000',
  '-6.38821700000',
  '-6.38697000000',
  '-6.38439900000',
  '-6.40960000000',
  '-6.39592000000',
];

export const initialData = garduName.map((el, index) => ({
  id: index + '',
  name: el,
  lat: garduLat[index],
  long: garduLong[index],
}));

AsyncStorage.setItem('data', JSON.stringify(initialData));

// export const data = ["avid"];
