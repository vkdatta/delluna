export const name="filter_down_alt";
export const id="dl_44ec227c917b65b63acf";
export const url=new URL("../icons/filter_down_alt.svg?v=eb436b66165e5ee08b133f70fe3d0d8c9df6f5d81ed435e720f2ea954bfdfbd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
