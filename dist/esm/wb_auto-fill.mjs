export const name="wb_auto-fill";
export const id="dl_7d7aa9f44702faf26dd7";
export const url=new URL("../icons/wb_auto-fill.svg?v=f62c5428fae2deb216f170651bcb1f33627754a0e30439a248be037f830f4ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
