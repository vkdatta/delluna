export const name="building-fill";
export const id="dl_b8def6afbea04353b5fe";
export const url=new URL("../icons/building-fill.svg?v=e761ab23e706f6b5c81987fb72bd3e5a4331b4499cfdabf70ef18b4f2b84a284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
