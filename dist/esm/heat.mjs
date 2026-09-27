export const name="heat";
export const id="dl_f3a2872a0c6cc4555599";
export const url=new URL("../icons/heat.svg?v=5b2322299be84961ddb9905b4ecc9c6261efb7799679540d846dbb210c862746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
