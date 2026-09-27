export const name="lucid_3-search-x";
export const id="dl_4a51b080be7549fab8a7";
export const url=new URL("../icons/lucid_3-search-x.svg?v=27616d66e00a745d1a70c0ce0c5b8913e8d6a10a98021df19e29b052f378d0cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
