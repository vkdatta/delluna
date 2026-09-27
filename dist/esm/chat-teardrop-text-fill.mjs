export const name="chat-teardrop-text-fill";
export const id="dl_33bbe8bf926149c4a170";
export const url=new URL("../icons/chat-teardrop-text-fill.svg?v=da0128ae15002d0583c27a02840b9c56571d57649d8c32ea7c3bfd632047d1fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
