export const name="mobile_gear";
export const id="dl_fe6656351567e4b3e618";
export const url=new URL("../icons/mobile_gear.svg?v=f5b0b87205dc8940dfe2786cdf749724f20f5b9a4a6fde104ab0eca6e01ada5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
