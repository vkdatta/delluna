export const name="pause-circle";
export const id="dl_bbb3ea8dbce84b7b981b";
export const url=new URL("../icons/pause-circle.svg?v=3ef8eb2d51ead105368d4dfe41eb012fc851c68db875ce54f034560b2aaaa3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
