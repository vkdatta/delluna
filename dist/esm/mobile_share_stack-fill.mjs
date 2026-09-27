export const name="mobile_share_stack-fill";
export const id="dl_1126f9aca76c5e4f991e";
export const url=new URL("../icons/mobile_share_stack-fill.svg?v=e8a451c639971adc6dc6ae4d6b37bacbc71ffc310fc05a21827bf92bc378d069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
