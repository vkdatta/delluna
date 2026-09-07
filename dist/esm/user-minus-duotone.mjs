export const name="user-minus-duotone";
export const id="dl_468bc77cf1154ffeaf07";
export const url=new URL("../icons/U/user-minus-duotone.svg?v=daf6a2fca8be5e3d845758135c343cd602440fc8120402ca3f029a377f2a6b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
