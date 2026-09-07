export const name="treasure-chest-fill";
export const id="dl_fe45cbd25113447dae31";
export const url=new URL("../icons/T/treasure-chest-fill.svg?v=6a5abb74ab232589afe67e90fc6facf8d838528b3ea614c7f1a9f7555444ee8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
