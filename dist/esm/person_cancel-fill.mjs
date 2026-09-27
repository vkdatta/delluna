export const name="person_cancel-fill";
export const id="dl_fc72423f52d7bb336586";
export const url=new URL("../icons/person_cancel-fill.svg?v=43d0064b7ba52016464748702093bd205a4fa1e194238c2fb1256d1d01873979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
