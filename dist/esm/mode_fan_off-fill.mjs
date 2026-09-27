export const name="mode_fan_off-fill";
export const id="dl_24c3444eb347fac8dab5";
export const url=new URL("../icons/mode_fan_off-fill.svg?v=e3efd3a8e825451386b27cfaa00756775113961462c7b5ba117b2a3758e054c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
