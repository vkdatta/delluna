export const name="wave-triangle-duotone";
export const id="dl_fc6ea0700db67b0f51dd";
export const url=new URL("../icons/wave-triangle-duotone.svg?v=76e5556b80c008701e267dc405b2f0a1cf7fd6c35d296febd5c97b5185e1d560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
