export const name="no_crash-fill";
export const id="dl_8510b2b21c8f4a269392";
export const url=new URL("../icons/no_crash-fill.svg?v=39ce5dba3663670868339502667da1ad2595f0b3863ca498b291837a19c1d8c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
