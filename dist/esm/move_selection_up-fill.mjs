export const name="move_selection_up-fill";
export const id="dl_aa927dee84db45659e84";
export const url=new URL("../icons/move_selection_up-fill.svg?v=0421cc78f0eaf4c8c9d36634fdf42133cea50b01963c0a69ef473de9c4103ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
