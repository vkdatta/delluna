export const name="grid_guides-fill";
export const id="dl_026dad9b49f2ddf7f038";
export const url=new URL("../icons/grid_guides-fill.svg?v=00298ceaa6f7d1ff3bd08e4ed12b16b305d88d6d84fa866fcba0a94104fe6a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
