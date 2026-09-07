export const name="spray-bottle-fill";
export const id="dl_b683ed8fd2cd4abf8240";
export const url=new URL("../icons/S/spray-bottle-fill.svg?v=97f6cec4910de51368357286d8121bb569972c125a011a887b5ffd0233655a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
