export const name="split-horizontal-fill";
export const id="dl_c105c393d11244e98412";
export const url=new URL("../icons/S/split-horizontal-fill.svg?v=d58888ccf1dab088940016e3a3e558cf70f193a64366e7bc683796787b5076b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
