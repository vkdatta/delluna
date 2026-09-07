export const name="syringe-bold";
export const id="dl_91c3a9f4c466470daf04";
export const url=new URL("../icons/S/syringe-bold.svg?v=23de01cbe18ecd955fcec78df50416d27e1c03dd3682bdadb803f1555523bdcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
