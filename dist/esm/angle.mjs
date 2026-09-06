export const name="angle";
export const id="dl_924612994f664ee09055";
export const url=new URL("../icons/angle.svg?v=2d4a8a92aaa3df426aa6447012e83318f7dec143e8a523bde3d8aca1f2bf5c3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
