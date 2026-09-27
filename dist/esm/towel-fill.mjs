export const name="towel-fill";
export const id="dl_d40f3575a5e6dcf3bd55";
export const url=new URL("../icons/towel-fill.svg?v=9471b79a44a6099b93cd3015c2005bfa1d97550273a5df7ddd84884e52a73787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
