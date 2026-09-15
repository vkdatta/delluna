export const name="cinematic_blur";
export const id="dl_d4326f20348041458928";
export const url=new URL("../icons/C/cinematic_blur.svg?v=e598a1494e406a33a20f2204d58e475f9b24bc31f66324362c67122f8b44f45a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
