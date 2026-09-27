export const name="lucid_3-map";
export const id="dl_630b8e5b1dd14d678e9c";
export const url=new URL("../icons/lucid_3-map.svg?v=e2dfae177385404c75ed5f08dfd7392fa92de13f85efd799a405b4919527b828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
