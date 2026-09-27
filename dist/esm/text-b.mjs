export const name="text-b";
export const id="dl_bc9c6ebd210038cfe8e0";
export const url=new URL("../icons/text-b.svg?v=4647e405501118bda05b2a176893e850e9239ed89641160c1997155730909a66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
