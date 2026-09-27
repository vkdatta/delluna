export const name="bluetooth-x-fill";
export const id="dl_d6a11d36252144a798a7";
export const url=new URL("../icons/bluetooth-x-fill.svg?v=b9353414a4e6a590c2ec7858acc0db8b25baddf8c38809a7906e0acffde1e1bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
