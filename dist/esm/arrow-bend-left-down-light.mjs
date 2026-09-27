export const name="arrow-bend-left-down-light";
export const id="dl_517f9815ddfd4dbba244";
export const url=new URL("../icons/arrow-bend-left-down-light.svg?v=0b1e9f427d2332458f0aa320e5f3f798b289b035d873a5f8ca246ffdf1a6fd6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
