export const name="lucid_2-ferris-wheel";
export const id="dl_2dccef17815e420980ba";
export const url=new URL("../icons/lucid_2-ferris-wheel.svg?v=e4aabf6d1974c5343948aa0adfeaded4930364961c783a9aa7905eb8d135915d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
