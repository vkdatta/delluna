export const name="table_restaurant-fill";
export const id="dl_df80210150fb6c8e0537";
export const url=new URL("../icons/table_restaurant-fill.svg?v=cae5b9fc62a5d8ddf8242d3938572ad034d68d25338c6fc0d45b0a7539363c63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
