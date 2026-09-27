export const name="clock-duotone";
export const id="dl_47f64d54d85240c5bd8e";
export const url=new URL("../icons/clock-duotone.svg?v=f6ec71b11fef6ee869281a7f4b1dfec6b1e9638cd715ab7cf30e48b4357b054c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
