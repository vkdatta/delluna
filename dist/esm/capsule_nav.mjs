export const name="capsule_nav";
export const id="dl_b9e9f80916cd41f89578";
export const url=new URL("../icons/capsule_nav.svg?v=5dcc7051b6b089ff503a42d92a506873324212e0a90a4fdc6e73b6c2390a48f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
