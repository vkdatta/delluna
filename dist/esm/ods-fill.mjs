export const name="ods-fill";
export const id="dl_a1369ec948a94fd3b304";
export const url=new URL("../icons/O/ods-fill.svg?v=840623d27462ef75a6a72f2f0834fd3589ee395289766a352eda3274c996a1a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
