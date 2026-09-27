export const name="lucid_2-grid-2x2";
export const id="dl_71da725e64a745be92b3";
export const url=new URL("../icons/lucid_2-grid-2x2.svg?v=7e4c20c0e07fba1715b74db7c79faa5e1bf48556e15f0e467c44063d5277b2fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
