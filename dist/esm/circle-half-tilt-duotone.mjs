export const name="circle-half-tilt-duotone";
export const id="dl_ac37c0783034468581de";
export const url=new URL("../icons/circle-half-tilt-duotone.svg?v=9bce85f1da28ea51353579618c312a7177db0a0b7a60a8cef9b1687feb13ef87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
