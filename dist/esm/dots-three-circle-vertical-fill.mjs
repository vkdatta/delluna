export const name="dots-three-circle-vertical-fill";
export const id="dl_c5bbe10efcb340b9ab4a";
export const url=new URL("../icons/dots-three-circle-vertical-fill.svg?v=088861e6f2250390308b627e8453efb2d037dd6b9d662f4a1a8eec171422fc51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
