export const name="mms-fill";
export const id="dl_ecbb89e0ae768da0532f";
export const url=new URL("../icons/mms-fill.svg?v=17c2a18feac6586256863591b6fe6f00d8d60c9801381f087518c868cc3d3dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
