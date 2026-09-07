export const name="eject-simple-light";
export const id="dl_b4854bd94cb8448c8e1c";
export const url=new URL("../icons/eject-simple-light.svg?v=a2b00899ac299844c882105fed6b7b8f88da3f157feb2795ac642ad429a09afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
