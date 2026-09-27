export const name="lock_open_circle-fill";
export const id="dl_d6965ab2e3c9ed311f73";
export const url=new URL("../icons/lock_open_circle-fill.svg?v=cf0fbb708ed653cc883a8ffaa45a2cd2f8736a51560ba5733d831e2eefa43212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
