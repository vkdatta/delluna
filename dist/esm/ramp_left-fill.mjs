export const name="ramp_left-fill";
export const id="dl_b88d4a08b887537db161";
export const url=new URL("../icons/ramp_left-fill.svg?v=f85c1efa6b8e0c2033dac77245eed889f80c1bf38363868d42deab781e220f77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
