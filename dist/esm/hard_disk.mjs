export const name="hard_disk";
export const id="dl_2876929050dcf057955f";
export const url=new URL("../icons/hard_disk.svg?v=9e6230b7cf3f1a35255ff51c2f6c084546971dbdcf8757e2d713396edbe2ca65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
