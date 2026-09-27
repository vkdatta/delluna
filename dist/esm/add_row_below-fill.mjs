export const name="add_row_below-fill";
export const id="dl_2dff1c746ff74f625818";
export const url=new URL("../icons/add_row_below-fill.svg?v=27bedab859305d7eda1bb3604b9da60d9e3c403955476bbc5f7627e05d4be587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
