export const name="masks";
export const id="dl_07cd6d7a84adbd9e7a4a";
export const url=new URL("../icons/masks.svg?v=719352c790d2baff61e92dd63f813e88ed86d5ec4a6b76a81bec0ed5973187d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
