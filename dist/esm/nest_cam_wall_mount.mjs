export const name="nest_cam_wall_mount";
export const id="dl_226cc04cbe9d1353f39b";
export const url=new URL("../icons/nest_cam_wall_mount.svg?v=fd5cca39f5d0f6f45568c1dc1f5f321aebe40669f877bd7c030e46299355df6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
