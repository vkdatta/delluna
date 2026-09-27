export const name="stylus_pen-fill";
export const id="dl_da183f7855c9b0e7278a";
export const url=new URL("../icons/stylus_pen-fill.svg?v=a0e397c1375ba8792a782e583341e8a67ab7a5bf6a0aef72a0e188fa4d9c74db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
