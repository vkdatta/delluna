export const name="selection-all-bold";
export const id="dl_8ba993fba3b640de33cb";
export const url=new URL("../icons/selection-all-bold.svg?v=a4fcd692c24f52b668f75a84efc3245a7832562d659cd1c5d8b6b19b46f2e128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
