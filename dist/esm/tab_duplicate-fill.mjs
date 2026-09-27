export const name="tab_duplicate-fill";
export const id="dl_f134076a85fcaa22c9ba";
export const url=new URL("../icons/tab_duplicate-fill.svg?v=4a92c882edc5692e4382eb05a4e12dde8f7d82662f8770e7c50e6e51ed2f49a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
