export const name="add_link-fill";
export const id="dl_a9459a7581bb44a296f8";
export const url=new URL("../icons/A/add_link-fill.svg?v=536a61767d38393f35401b345d60180bb08c873bd21a79d0027b6dea404be2c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
