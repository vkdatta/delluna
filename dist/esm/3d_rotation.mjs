export const name="3d_rotation";
export const id="dl_f0ecc48b9aa9229718ea";
export const url=new URL("../icons/3d_rotation.svg?v=dd3d8a9d8b46709d289cc77bcc2a777f0a92e923960773a4def2356de2c5693d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
