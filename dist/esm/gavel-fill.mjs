export const name="gavel-fill";
export const id="dl_b5752b77645f44eaae95";
export const url=new URL("../icons/gavel-fill.svg?v=82d3aa5becc0cbb85196bb20977c2b07768699246427e78a44447d2c21484c6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
