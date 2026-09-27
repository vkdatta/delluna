export const name="data_table";
export const id="dl_8ac4e1a9f594dd769f6c";
export const url=new URL("../icons/data_table.svg?v=5c936808bf8830f41f4137e4a441d3bd43b42f09bb160eecaad2704942553b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
