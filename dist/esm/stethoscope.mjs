export const name="stethoscope";
export const id="dl_67df1d5074f24c84a2ff";
export const url=new URL("../icons/stethoscope.svg?v=c1e5986dc93b7d557839b77253c3f80ddbda4ed2d795c5d39d98ba6510d105c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
