export const name="file-css-bold";
export const id="dl_34566d2d49234c4aa954";
export const url=new URL("../icons/file-css-bold.svg?v=5fbfb647f309c5f14769171f32e60d0fcf89c2f6012b217028a987d60bb4a87f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
