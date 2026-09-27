export const name="print-fill";
export const id="dl_c61ed1ac6ea7d68766a1";
export const url=new URL("../icons/print-fill.svg?v=48c4ea81e11090eedd9c780e69712a0885ee92dfcc4fc2567848973a87e9c3e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
