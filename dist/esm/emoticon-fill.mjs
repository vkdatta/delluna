export const name="emoticon-fill";
export const id="dl_e457419d11703720062f";
export const url=new URL("../icons/emoticon-fill.svg?v=efa5435081ef98569f98246523e6376f0468c265c53965e44d57a4a0641bb5a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
