export const name="e_mobiledata-fill";
export const id="dl_87816c4c722543719c40";
export const url=new URL("../icons/E/e_mobiledata-fill.svg?v=0edb1892916245903e37a9ddede4f2006484f0280ed66e481524b7483891c621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
