export const name="tidal-logo-light";
export const id="dl_e32a0e4a78bd126ad7a6";
export const url=new URL("../icons/tidal-logo-light.svg?v=44edd255a832d9ff0f5367febd4e11aa411e8607221897d3e0d4193bc46d596d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
