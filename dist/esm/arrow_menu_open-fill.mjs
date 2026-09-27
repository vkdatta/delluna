export const name="arrow_menu_open-fill";
export const id="dl_2f46c243be11b49acc49";
export const url=new URL("../icons/arrow_menu_open-fill.svg?v=c873434fde5209aa70490edb63fd282ac3765ad87f42d77d450c7e96e0ed66f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
