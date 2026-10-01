export const name="hdr_plus_off-fill";
export const id="dl_6dab0bfb8b29bd306aed";
export const url=new URL("../icons/hdr_plus_off-fill.svg?v=d90a69fb0aa0661335e6bb81b2b6d11087115be756fce2154c1bcb718b7183a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
