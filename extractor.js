const links = $input.item.json.circular_links;
return links.map(link => ({ json: { link: link } }));