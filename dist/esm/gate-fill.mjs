export const name="gate-fill";
export const id="dl_3d53e724bfb1bf62b7d7";
export const url=new URL("../icons/gate-fill.svg?v=e56a72c59e9ea83980ff8fd4198e31534e7cac07c6d0e53f4409cd971538b560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
