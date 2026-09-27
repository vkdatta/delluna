export const name="potted-plant-bold";
export const id="dl_4598c0322d524b74a4a4";
export const url=new URL("../icons/potted-plant-bold.svg?v=819ce31d0b3ac359b18938defbfa902bc46885030da921cc167da8b265e1ef6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
