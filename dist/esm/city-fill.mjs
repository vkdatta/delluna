export const name="city-fill";
export const id="dl_82e437fe2bc049c1a4f0";
export const url=new URL("../icons/city-fill.svg?v=ddcc0e27242e717277dfc72f50e4fbb12114998bc8e4cb1798d715af219fdbf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
