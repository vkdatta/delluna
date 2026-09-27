export const name="elevation-fill";
export const id="dl_c6ef7edb840988bd86a9";
export const url=new URL("../icons/elevation-fill.svg?v=6d3f436fcf2f31f94459cb78e5b00eadca3f484a6976580672318ea65642c808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
