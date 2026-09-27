export const name="hub-fill";
export const id="dl_a67cf93dc437ce5eb094";
export const url=new URL("../icons/hub-fill.svg?v=44cd0a7715107f66ec8a87040765241995292dd1417d68ac7564e896d091b9ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
