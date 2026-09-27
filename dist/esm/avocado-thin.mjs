export const name="avocado-thin";
export const id="dl_5708255060284decb9b2";
export const url=new URL("../icons/avocado-thin.svg?v=7359bc7cab977bd404e229bd3b91c9b7742f42d1c5ebaa79dc2ff825f02a0367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
