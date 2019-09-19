#!/bin/bash
db_name=$1
filename=$2

#gunzip $filename'.gz'
#docker stop odoo

host='localhost'
export PGPASSWORD="odoo"

psql -h $host -U odoo -d postgres -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '"$db_name"' AND pid <> pg_backend_pid();"
psql -h $host -U odoo -d postgres -c 'DROP DATABASE '$db_name';'
psql -h $host -U odoo -d postgres -c 'create database '$db_name';'
psql -h $host -U odoo -d $db_name -f $filename

psql -h $host -U odoo -d $db_name -c "delete from ir_attachment where res_model = 'ir.ui.view' or res_model = 'ir.ui.menu';"

psql -h $host -U odoo -d $db_name -c "UPDATE ir_cron SET active = FALSE WHERE 1=1"

psql -h $host -U odoo -d $db_name -c "delete from ir_model_data where name = 'ir_config_parameter_the_one_card_config';"
psql -h $host -U odoo -d $db_name -c "delete from ir_config_parameter where key = 'the_1_config';"


gzip $filename

#docker start odoo

exit 0
