export const name="speaker-simple-low";
export const id="dl_c37f83190d5760e6d24c";
export const url=new URL("../icons/speaker-simple-low.svg?v=b7958b3c5b39108c70583bd5faffd9b1a901cb446a473089a0054509cb2e7503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
