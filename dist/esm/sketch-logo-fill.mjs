export const name="sketch-logo-fill";
export const id="dl_e54739595f4f9a908c03";
export const url=new URL("../icons/sketch-logo-fill.svg?v=293b8e25ae2880eb2044e0d7bfbebbd849d8b89780e07427f9fbbcaa687dd051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
