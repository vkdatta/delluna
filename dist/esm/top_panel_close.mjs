export const name="top_panel_close";
export const id="dl_191e14ab95c862defd26";
export const url=new URL("../icons/top_panel_close.svg?v=8aa406454cd4402c57a1cf61f007de9cd321d5f9fd4eee81dfd829b7bf6835b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
