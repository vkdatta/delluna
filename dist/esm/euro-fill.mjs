export const name="euro-fill";
export const id="dl_d963a09fbb95cdb10005";
export const url=new URL("../icons/euro-fill.svg?v=1e313af23441c8da988e1549ea1c2a09cc1a3187fef376a2f1b68e50d950c19b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
