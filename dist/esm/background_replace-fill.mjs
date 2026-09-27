export const name="background_replace-fill";
export const id="dl_699476aca05796299e60";
export const url=new URL("../icons/background_replace-fill.svg?v=f76aea5f8c77d9673c91f7144024fac83805fc4f840dd2bd0d5b3020f23158d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
