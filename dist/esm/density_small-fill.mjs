export const name="density_small-fill";
export const id="dl_9e87822689c7532a321c";
export const url=new URL("../icons/density_small-fill.svg?v=2a82a6b0e85ac14af3a4849dce33ce74037ac74c84d1594f666ecfad8103be3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
