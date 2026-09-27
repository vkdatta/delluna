export const name="hexagon-duotone";
export const id="dl_1af23a74ae9f44ab9d8e";
export const url=new URL("../icons/hexagon-duotone.svg?v=0340e13432c106c9422429e41c08157cacf2b6179d774dcf2ee69067b63b4302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
