export const name="link_off-fill";
export const id="dl_64da3eb92b8642049073";
export const url=new URL("../icons/link_off-fill.svg?v=8971c196e665069d7ee63515607d86f3d6e6b60d1e8636801c37312b7fdb7700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
