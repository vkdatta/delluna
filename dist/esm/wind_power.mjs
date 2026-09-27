export const name="wind_power";
export const id="dl_3c4c96c68b635db94aea";
export const url=new URL("../icons/wind_power.svg?v=9f303e16cdabc7d5ad7b614fa2558bc21dbdff7785fddea63baebdb7136fe1e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
