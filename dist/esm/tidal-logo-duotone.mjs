export const name="tidal-logo-duotone";
export const id="dl_5a90ad7158af0137e75f";
export const url=new URL("../icons/tidal-logo-duotone.svg?v=df8eab0b634a3dccdfc07cd996297003fc34df118868159daf76835500844afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
