export const name="switch-camera";
export const id="dl_ecb9632c1ab141b5bce6";
export const url=new URL("../icons/switch-camera.svg?v=ef6f3a65c8d005aaae408e15d5bbee4a8c16656813051a4052cec960ce154360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
