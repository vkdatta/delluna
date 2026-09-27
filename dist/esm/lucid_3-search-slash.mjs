export const name="lucid_3-search-slash";
export const id="dl_7ee37ef433204603bff4";
export const url=new URL("../icons/lucid_3-search-slash.svg?v=891721c964475c73f0a478417d5d8b30e0b142fd11fc0ca13caf3aacdf1d3257",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
