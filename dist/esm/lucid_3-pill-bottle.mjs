export const name="lucid_3-pill-bottle";
export const id="dl_95a22a608e3e4e09ba3b";
export const url=new URL("../icons/lucid_3-pill-bottle.svg?v=c4f0589be97397ccd8051c3509a12f7f84ee983e3b367c6ef930f1478da32c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
