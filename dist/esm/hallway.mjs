export const name="hallway";
export const id="dl_835a5d67938184e9970c";
export const url=new URL("../icons/hallway.svg?v=68948e6bb6664aca9993336089e9196ae357717009208f05693e1040bf4cf6c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
