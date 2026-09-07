export const name="thermometer-fill";
export const id="dl_58ee79c66ab648a2a127";
export const url=new URL("../icons/T/thermometer-fill.svg?v=9049bd6aca8207430a606c92be3d7c6867a36d1a9b3db39ecb884dc947f2c2df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
