export const name="tally-3";
export const id="dl_0db9c3d735a5499797db";
export const url=new URL("../icons/tally-3.svg?v=f114d793d24779aadee99469691ee05eb7b74e8ad911775f5cd46ed1f87c5da1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
