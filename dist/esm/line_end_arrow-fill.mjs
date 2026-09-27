export const name="line_end_arrow-fill";
export const id="dl_15a87a6a3f03186214ae";
export const url=new URL("../icons/line_end_arrow-fill.svg?v=109befcb8eef8582c058543f8e9ec492bd3c1d60d8afc413a42eb7be61e6bfd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
