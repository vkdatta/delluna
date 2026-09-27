export const name="lucid_2-lollipop";
export const id="dl_171591a433b24eaa9578";
export const url=new URL("../icons/lucid_2-lollipop.svg?v=d785572ffffbf84784b946073234ed6f843185e8b3de691ec32d34e7dae3da89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
