export const name="step-back";
export const id="dl_c11160e18e514669b9f3";
export const url=new URL("../icons/step-back.svg?v=4badc38ff50e5b18bc41e277213514ed1075ea8007c112f89298f488f2babb7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
