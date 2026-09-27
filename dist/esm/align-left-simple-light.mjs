export const name="align-left-simple-light";
export const id="dl_17bb2d2be8e44f278688";
export const url=new URL("../icons/align-left-simple-light.svg?v=ee6d04f3ae15f807cca31b4d83e50562cf2f4a8b02785861710a6163b05a2527",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
