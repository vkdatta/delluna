export const name="work-fill";
export const id="dl_560eb88d08fc46faaecd";
export const url=new URL("../icons/work-fill.svg?v=31d29c52ee8094153ca9a9483f86710d8f44b47f189e6975699c4f41e31ad992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
