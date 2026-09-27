export const name="square_foot-fill";
export const id="dl_28e2de94e75626c33f73";
export const url=new URL("../icons/square_foot-fill.svg?v=e205f67aff545cfa056f9995a061bd5a2ece75dea90b148467ef4229412c1e1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
