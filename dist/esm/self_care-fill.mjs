export const name="self_care-fill";
export const id="dl_aa374b29d926f009250b";
export const url=new URL("../icons/self_care-fill.svg?v=094a2dc24b1bd81a552f5bc2581032b8d82476acfcb430cfb98780c2d08752f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
