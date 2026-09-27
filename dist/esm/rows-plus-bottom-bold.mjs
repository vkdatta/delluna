export const name="rows-plus-bottom-bold";
export const id="dl_afd3490119244fce8f7b";
export const url=new URL("../icons/rows-plus-bottom-bold.svg?v=bc8a6c75eec241080ea8c80364c3b3acd810e27f9456ed33e25b2870bade60d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
