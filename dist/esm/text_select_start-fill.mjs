export const name="text_select_start-fill";
export const id="dl_5bc4853b70708f631f51";
export const url=new URL("../icons/text_select_start-fill.svg?v=4fa153d0c7560c5093a17d1eefb96a693a0ee0e2589a85ef2115f7c516768ad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
