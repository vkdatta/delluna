export const name="lucid_1-battery";
export const id="dl_5c646780540a401e854b";
export const url=new URL("../icons/lucid_1-battery.svg?v=acab1196eb67769d5edbbeedd3d91be2c7b5775363ee01d42376326d0dd1cb48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
