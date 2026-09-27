export const name="ad_off-fill";
export const id="dl_ecd0c187e275ea607a26";
export const url=new URL("../icons/ad_off-fill.svg?v=e0a3ea32900169e0a0d3cb894b40d415a8a6322bc8137805da69155483e24b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
