export const name="fiber_pin-fill";
export const id="dl_a20b4e7fd53e62347fb8";
export const url=new URL("../icons/fiber_pin-fill.svg?v=ade79ffaa9e8f2932fc1a49f6905c965b412505cdf873c97841fef7a727737cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
