export const name="lucid_1-arrow-up-left";
export const id="dl_a1c81d2a7ca54493b25e";
export const url=new URL("../icons/lucid_1-arrow-up-left.svg?v=335320567b4eb76324878d83c8fa0860d5f52477bf21ebdf1fee5a23178925c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
