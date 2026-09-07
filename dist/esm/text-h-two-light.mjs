export const name="text-h-two-light";
export const id="dl_c0812d1d54a94980a64e";
export const url=new URL("../icons/T/text-h-two-light.svg?v=388b7d102d791961ff2626aa34d896f403f1ca7cb375124a30de49e9121ad608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
