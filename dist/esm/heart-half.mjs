export const name="heart-half";
export const id="dl_af454886685545ef9313";
export const url=new URL("../icons/heart-half.svg?v=7fbb4185e409ccaff74df91e36bbde461e38d1d7d1d7e5067689e4fe85ccc748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
