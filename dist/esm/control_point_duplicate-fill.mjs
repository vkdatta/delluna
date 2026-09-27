export const name="control_point_duplicate-fill";
export const id="dl_b6d60da6e8629c7ab304";
export const url=new URL("../icons/control_point_duplicate-fill.svg?v=11d7fae686194941fe7d1589f40f6978d09e5ba326889607b788380672893607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
