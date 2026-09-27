export const name="hotel-fill";
export const id="dl_4ab9da441d132afd23a1";
export const url=new URL("../icons/hotel-fill.svg?v=d3e0c58d9a12c94d2d00d3010b56a9499efbdd096211ae1645ec9e04b819626d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
