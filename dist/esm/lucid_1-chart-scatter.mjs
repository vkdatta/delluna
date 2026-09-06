export const name="lucid_1-chart-scatter";
export const id="dl_3940b44124d34ba4a0a9";
export const url=new URL("../icons/lucid_1-chart-scatter.svg?v=62b84cd35fafb81cdd349130366d25812c1985e748b0911bed74406d5f0f5b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
