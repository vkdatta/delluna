export const name="trend-down-bold";
export const id="dl_ccb6dbccab3daf3379db";
export const url=new URL("../icons/trend-down-bold.svg?v=3f61ef535a3900104715c99b9b3509147fff988198df8c1fcd959b1398e6bf51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
