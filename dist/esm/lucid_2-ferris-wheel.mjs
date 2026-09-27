export const name="lucid_2-ferris-wheel";
export const id="dl_2dccef17815e420980ba";
export const url=new URL("../icons/lucid_2-ferris-wheel.svg?v=e91db3e19d01ca43eccf25f0498da557bdeed2b8b8967ec9864f63e19030074f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
