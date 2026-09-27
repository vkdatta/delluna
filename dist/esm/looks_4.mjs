export const name="looks_4";
export const id="dl_8106e6f7c5b86d6dea16";
export const url=new URL("../icons/looks_4.svg?v=e1ba7f6cd4f6260292c3a98b2bf736b1fce6689a211af84c82c8f1307ea9bde7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
