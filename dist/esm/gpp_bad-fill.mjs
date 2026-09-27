export const name="gpp_bad-fill";
export const id="dl_64db9040cad7072807af";
export const url=new URL("../icons/gpp_bad-fill.svg?v=355aa3ff86cd1ab9d3fee7bf90befb2779084fc357f4d583e8938842988cfdc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
