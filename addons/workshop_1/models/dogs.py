from odoo import api, fields, models, _


class Dogs(models.Model):
    _name = 'dogs'

    name = fields.Char(
        string="Name"
    )
    breed = fields.Char(
        string="Breed"
    )