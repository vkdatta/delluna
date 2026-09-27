export const name="lucid_1-arrow-down-right";
export const id="dl_c2976220519144b8a711";
export const url=new URL("../icons/lucid_1-arrow-down-right.svg?v=d11513a379e0dbe2109b1de3af8e6c291c987ad4b947c7d5c858df14bf63e066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
