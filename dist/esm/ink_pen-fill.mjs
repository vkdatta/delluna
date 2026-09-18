export const name="ink_pen-fill";
export const id="dl_bd9a8157726c43dfaab9";
export const url=new URL("../icons/ink_pen-fill.svg?v=2010a4eb9ae54018649b72de8d856c6125c771c1fbcae88f2807b7df21f6d3a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
