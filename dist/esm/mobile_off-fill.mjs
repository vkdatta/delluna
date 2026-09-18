export const name="mobile_off-fill";
export const id="dl_b644b693ba464ecebb3e";
export const url=new URL("../icons/M/mobile_off-fill.svg?v=6f2a4adc843d9f145806a1b6971eabc8db98403f7dded1119b76226bb7ea78b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
