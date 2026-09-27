export const name="lucid_1-chevron-last";
export const id="dl_5a08b9a6a63542cd9512";
export const url=new URL("../icons/lucid_1-chevron-last.svg?v=3f970195a5d6c7de7a50d4d018ede0fe2d350c5b948ac4f2b2a1af1a501dc054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
