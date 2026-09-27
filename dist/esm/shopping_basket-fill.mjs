export const name="shopping_basket-fill";
export const id="dl_95a2203ea81767dbc92a";
export const url=new URL("../icons/shopping_basket-fill.svg?v=a3974f2c21fba633488d2001b07dcf38acfae67e4659f24f090a73f07ad65809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
