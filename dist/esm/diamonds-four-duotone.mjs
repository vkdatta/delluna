export const name="diamonds-four-duotone";
export const id="dl_b1536f2632f346cc869a";
export const url=new URL("../icons/diamonds-four-duotone.svg?v=5d95423b444b12cc1f3828add888ee632c45ec43e9dfd03140548507239c1e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
