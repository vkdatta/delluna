export const name="mouse-left-click-duotone";
export const id="dl_ec07f598361f4c41a232";
export const url=new URL("../icons/mouse-left-click-duotone.svg?v=fa11071f4ac96125fae3093c5c4e0d0c565a3bebe18b045b26e256fa89a3a035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
