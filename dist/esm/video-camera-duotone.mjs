export const name="video-camera-duotone";
export const id="dl_3cf018a7e8da4128a78a";
export const url=new URL("../icons/V/video-camera-duotone.svg?v=a4bcecf064f65c4b245c49f70f7c7988670c18f179505ad29e8208ebf5ba7e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
