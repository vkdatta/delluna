export const name="mode_fan_off-fill";
export const id="dl_7689c051fb2141c8bdc5";
export const url=new URL("../icons/mode_fan_off-fill.svg?v=99704c1e055b393c6a296eeca5c3615398e2663cf9811dd9d233e6b889140753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
