export const name="triangle-dashed";
export const id="dl_12101ec8ed1640efaaac";
export const url=new URL("../icons/triangle-dashed.svg?v=a624b6ac6bf547ea2e726424e493d56c52d40a9f3e694f8b3454323a4f34dba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
