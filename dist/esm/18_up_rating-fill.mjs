export const name="18_up_rating-fill";
export const id="dl_a744c47cb2f30b6027f7";
export const url=new URL("../icons/18_up_rating-fill.svg?v=3a3de6e080ecb5cee75923dabc9ed362ef080f565ee2131d49d57ac203328383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
