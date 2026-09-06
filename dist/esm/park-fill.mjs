export const name="park-fill";
export const id="dl_cbb81df81e684eeba3fa";
export const url=new URL("../icons/park-fill.svg?v=aada5ae414601212b578ba4bd8017b49764e2ba0a57ab12ce9f70899f490bf63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
