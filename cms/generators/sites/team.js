({
	teaser: {
		$cover_img_type: 'image',
		cover_img: '/remote/direct_uploads/1526939630_rawpixel-652547-unsplash.jpg',
		$style_expander: true,
		$style_info: 'won\'t work with the temp action',
		style: {
			darken: '0.45',
			$font_color_size: 'inline',
			$font_color_type: 'colorpicker',
			font_color: '#ffffff'
		},
		header: 'Das Valyriot-Team',
		tagline: ''
	},
	$elements_size: '12',
	$elements_templatitator: '@@global.element_types',
	elements: [
		{
			$space_hidden: true,
			space: true,
			height: '100px'
		},
		{
			jump_id: '',
			image_form: '@@background_forms.square',
			$element_type_type: 'title',
			element_type: 'team_cards',
			$team_cards_hidden: true,
			team_cards: true,
			dark: false,
			list: [
				{
					$image_type: 'image',
					image: '/remote/direct_uploads/1526941578_Screenshotfrom2018-05-2200-25-41.png',
					name: 'Christian Huthmacher',
					position: 'CEO',
					$description_type: 'textarea',
					description: 'fasdfas afjsd lfasdlf asldfjasldjflasjdfla sdf asd falsjd faölsjd falsd flasjdfla sdf asld fasdjfals jdfas dlfjasldfj asldjf asljdfalsjdflasjdflasjdlf asld fasljd fasldj flasj dfasjdflas df asd fasldj fasljdf alsdfj asldj falsd jfalsj dfalsdj falsdf',
					marked_description: '<p>fasdfas afjsd lfasdlf asldfjasldjflasjdfla sdf asd falsjd faölsjd falsd flasjdfla sdf asld fasdjfals jdfas dlfjasldfj asldjf asljdfalsjdflasjdflasjdlf asld fasljd fasldj flasj dfasjdflas df asd fasldj fasljdf alsdfj asldj falsd jfalsj dfalsdj falsdf</p>',
					$marked_description_hidden: true,
					social: []
				},
				{
					$image_type: 'image',
					image: '/remote/direct_uploads/1526939146_me(copy).jpg',
					name: 'Wolfgang Rathgeb',
					position: 'CTO',
					$description_type: 'textarea',
					description: 'Wärend seinem Studium der technischen Informatik hat Wolfgang Rathgeb bereits begonnen seine ersten Firma zu Gründen und so nicht nur wärend, sondern neben dem Studium viel erfahreung Gesammelt.',
					marked_description: '<p>Wärend seinem Studium der technischen Informatik hat Wolfgang Rathgeb bereits begonnen seine ersten Firma zu Gründen und so nicht nur wärend, sondern neben dem Studium viel erfahreung Gesammelt.</p>',
					$marked_description_hidden: true,
					social: []
				},
				{
					$image_type: 'image',
					image: '/remote/direct_uploads/1526941580_Screenshotfrom2018-05-2200-25-05.png',
					name: 'Sander Lass',
					position: 'CDO',
					$description_type: 'textarea',
					description: '',
					marked_description: '',
					$marked_description_hidden: true,
					social: []
				}
			]
		},
		{
			$space_hidden: true,
			space: true,
			height: '100px'
		}
	],
	$background_forms_hidden: true,
	background_forms: {
		none: {
			css: ''
		},
		square: {
			css: 'square'
		},
		circle: {
			css: 'circle'
		}
	}
})