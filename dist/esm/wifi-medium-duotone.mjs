export const name="wifi-medium-duotone";
export const id="dl_61d8e1f0998726ce762e";
export const url=new URL("../icons/wifi-medium-duotone.svg?v=ee31fb511e36c3c837fed6fdac94671a779500da09354707065411d0861dd033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
