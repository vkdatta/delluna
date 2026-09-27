export const name="cases-fill";
export const id="dl_1952f6d9c6f2d48c0081";
export const url=new URL("../icons/cases-fill.svg?v=ec091ae904a72f52845d3beaa3863c04f7de8b1f8b721dd92bc5aa961fe9c304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
