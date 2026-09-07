export const name="smiley-light";
export const id="dl_a03cf1556bb4473299f6";
export const url=new URL("../icons/S/smiley-light.svg?v=2577f18e143ee4a8a05a10ac1604dba9023b9433efd2a25448b9952f628545d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
