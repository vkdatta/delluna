export const name="beenhere-fill";
export const id="dl_63e645feaa7549598aa9";
export const url=new URL("../icons/B/beenhere-fill.svg?v=339b9d2fba7b4a5244eac056aa612155e22b406c3257cfc400f1c1da81983e46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
