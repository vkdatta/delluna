export const name="lucid_3-repeat-off";
export const id="dl_9b8040742aef4a5c8591";
export const url=new URL("../icons/lucid_3-repeat-off.svg?v=1f01ca2c9b4ea8db648f34958d1bf3279a5fe503bd4b9803bec486041a47d7dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
