export const name="crop_2_3-fill";
export const id="dl_cd71741acdea4bc18420";
export const url=new URL("../icons/C/crop_2_3-fill.svg?v=55c7e7f34a3169b83308b4b4f59450e13aea82d9c466bf519881aaf90e02fd13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
