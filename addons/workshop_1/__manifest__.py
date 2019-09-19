# -*- coding: utf-8 -*-
{
    'name': "Workshop 1",

    'summary': """
        First workshop module for learning javascript in Odoo
    """,

    'author': "Christopher ONeal",
    'website': "https://github.com/limitpointinf0/",
    'category': 'Uncategorized',
    'sequence': 10,
    'version': '0.1',
    'version': '10.0.0.0.1',

    # any module necessary for this one to work correctly
    'depends': [
    ],

    # always loaded
    'data': [
        'views/dogs.xml',
        'views/workshop_menu.xml',
        'views/point_of_sale_assets.xml',
    ],
    'qweb': [
        'static/src/xml/dogs.xml',
    ],
    'demo': [],

}