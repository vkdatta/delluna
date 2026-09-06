export const name="number-circle-one-duotone";
export const id="dl_c137ddfab7264fbb91ba";
export const url=new URL("../icons/number-circle-one-duotone.svg?v=285e85f6fe6204aeb0b4bccc5b01ad602cacd7e79097879509fca593ec958abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
