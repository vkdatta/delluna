export const name="car_lock-fill";
export const id="dl_c4cb59c170945a4287ef";
export const url=new URL("../icons/car_lock-fill.svg?v=b0e4743f79855b5fa21fe0f14ed3d690e5b614bdadb191d57cffde2579f03e06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
