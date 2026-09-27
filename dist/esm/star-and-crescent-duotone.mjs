export const name="star-and-crescent-duotone";
export const id="dl_02463d6687defe1beec2";
export const url=new URL("../icons/star-and-crescent-duotone.svg?v=f70a3d42782c0f8405f5e400858355c865c3e50464910dfefa6e2ee3c33f83ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
