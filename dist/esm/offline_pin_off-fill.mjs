export const name="offline_pin_off-fill";
export const id="dl_58a5b1805e67cb25f75c";
export const url=new URL("../icons/offline_pin_off-fill.svg?v=f77c2fddd3e1366bc73d2976059052466dc1d4bf34b0aa082e58679b9350df50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
