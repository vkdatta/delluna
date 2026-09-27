export const name="paperclip-horizontal-bold";
export const id="dl_4b7abac6d5eb46fcaf10";
export const url=new URL("../icons/paperclip-horizontal-bold.svg?v=b55a88c10f1a3ce5438c99a5f2c1c84f3dc00e519d7653c17a4aa0fc54b0b2f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
