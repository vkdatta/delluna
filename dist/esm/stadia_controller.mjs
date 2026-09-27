export const name="stadia_controller";
export const id="dl_145ced5e0192e1a2e22f";
export const url=new URL("../icons/stadia_controller.svg?v=a5c4179ff3d5f76bd2215599712b57eaa30826ec80f4b1c0a895afd436ec300c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
