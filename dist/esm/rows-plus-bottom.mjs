export const name="rows-plus-bottom";
export const id="dl_b811c5027ee04713901c";
export const url=new URL("../icons/rows-plus-bottom.svg?v=c06003fad666fbf1dab4a7902dc5d2b3a8d9f4d1cff9df32da254a437323f641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
