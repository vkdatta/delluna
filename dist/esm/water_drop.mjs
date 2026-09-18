export const name="water_drop";
export const id="dl_c18191e440dc4eb5bd9f";
export const url=new URL("../icons/W/water_drop.svg?v=0df9ec99a526fadafaf34c1f38c6c960691a1b515ae33cb1fa7da32ef1341ae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
