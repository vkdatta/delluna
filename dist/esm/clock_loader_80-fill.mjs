export const name="clock_loader_80-fill";
export const id="dl_e79768f5a24cf8b58938";
export const url=new URL("../icons/clock_loader_80-fill.svg?v=c094579588701679c405e380e6bdb96bb1f83dd88cd4b91d55e4e6262309f328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
