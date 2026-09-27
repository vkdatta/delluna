export const name="list-dashes-fill";
export const id="dl_2ee065b6d4e345c190de";
export const url=new URL("../icons/list-dashes-fill.svg?v=3b61434725bc42229cebabf72ed923da3231036dbb75c7d467f6d9b0e8d3fde9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
