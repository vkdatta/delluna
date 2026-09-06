export const name="camera-plus-duotone";
export const id="dl_e3c35b9b416c4cce916a";
export const url=new URL("../icons/camera-plus-duotone.svg?v=a2b66ce16663683742e55a577b80bb6bda8f43fc261f9e21d443324735a5d1bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
