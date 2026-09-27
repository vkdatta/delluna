export const name="barefoot-fill";
export const id="dl_a5e97b2cd1f0ee707dce";
export const url=new URL("../icons/barefoot-fill.svg?v=6230efa58e686e14a5f59319ed8d556ed9c1393c00b52d3f50f9091d7ef53108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
