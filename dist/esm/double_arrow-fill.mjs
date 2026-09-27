export const name="double_arrow-fill";
export const id="dl_8764bf6258dbf5b89c6b";
export const url=new URL("../icons/double_arrow-fill.svg?v=133462f78d07d265f7cad0e3eb6c029cc814f5b330c79de12b4e65ab33754170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
