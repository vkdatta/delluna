export const name="intersect-three";
export const id="dl_4544db3f81004c57bee9";
export const url=new URL("../icons/intersect-three.svg?v=a2752c37d2254f686f00d6ddd5949a90a3333ccf9f1874de399dd6fd8c13ae27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
