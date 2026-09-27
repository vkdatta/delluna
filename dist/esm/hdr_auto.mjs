export const name="hdr_auto";
export const id="dl_db66765d0f61f662ff6b";
export const url=new URL("../icons/hdr_auto.svg?v=592853ca05e5697eaf7e41732cafb6a419ec41df6f762d1b517a82b61b085465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
