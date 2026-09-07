export const name="skull-bold";
export const id="dl_6144b39cdc4d4b6f88b2";
export const url=new URL("../icons/S/skull-bold.svg?v=47de81c1934de5b403c1e42f66e03a7bdcc3324039765d018d78e3e1b6c7c13e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
