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
		header: 'The Team',
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
			list: []
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