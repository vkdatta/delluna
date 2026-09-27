export const name="popcorn";
export const id="dl_e8b767419b16409091b9";
export const url=new URL("../icons/popcorn.svg?v=013bb03f258582a4e773bec408430f7d8c27dae2c0302ada080bf15d825ce25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
