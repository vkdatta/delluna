export const name="bluetooth-slash";
export const id="dl_bb7dd3a055304678b81e";
export const url=new URL("../icons/bluetooth-slash.svg?v=2c22cc3c43fe134f387eec780584e61e783648413b3906093566762c6f16895d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
