#  use include within if

## member type and role

{% if config.admin %}
###  includes admin.njk here

{% include "../includes/admin.njk" %}

{% else %}
###  includes user.njk here

{% include "../includes/user.njk" %}
{% endif %}

