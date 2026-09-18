export const name="format_h6-fill";
export const id="dl_d58c4fc12f85422381a1";
export const url=new URL("../icons/format_h6-fill.svg?v=be1909c85e04aec7b6f1442bac2f61e26271bdf328af4b661745a76646d4e735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
