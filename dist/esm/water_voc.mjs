export const name="water_voc";
export const id="dl_166a74a5fc3a418f8725";
export const url=new URL("../icons/water_voc.svg?v=4703a74fbc0edccfca979882776d507479ea4f59ff0e7c95d6b2f8b0a4dd6e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
