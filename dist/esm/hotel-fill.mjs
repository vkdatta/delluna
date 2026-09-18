export const name="hotel-fill";
export const id="dl_3e258985ae7c4d45bbb7";
export const url=new URL("../icons/hotel-fill.svg?v=8b6b1b6a629f51dce0f0f2a8f8129e5c950140114cdb00ec34fe7e3b77bef0b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
