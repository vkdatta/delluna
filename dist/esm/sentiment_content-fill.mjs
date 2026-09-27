export const name="sentiment_content-fill";
export const id="dl_7a445b8bb549ff61ff82";
export const url=new URL("../icons/sentiment_content-fill.svg?v=da1ad6615157d45357ac017177e9e916e34ce26a454134d3e4d56c0b0529cbd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
