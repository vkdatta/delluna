export const name="pickleball-fill";
export const id="dl_1a96a384267741c495dd";
export const url=new URL("../icons/pickleball-fill.svg?v=7cd5d78dba0ed5da6e181724b595289f2799e24c4fd65ef55ac6a842f32360e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
