export const name="crop_square";
export const id="dl_bf6df80003fe456071dc";
export const url=new URL("../icons/crop_square.svg?v=b8aa34ab1709d5e7c75f2f1e0e3dff3a0f5ef767d088fd870472ac3de1783456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
