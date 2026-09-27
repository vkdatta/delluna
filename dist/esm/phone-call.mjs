export const name="phone-call";
export const id="dl_b211bc0ec7ea49ed991e";
export const url=new URL("../icons/phone-call.svg?v=35336b12955c146dfe9734e9a6c5d0d2e2f14c11bb2a031889db49e522ac07eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
