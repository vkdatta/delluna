export const name="nest_farsight_heat-fill";
export const id="dl_84c01fae7f019091fd93";
export const url=new URL("../icons/nest_farsight_heat-fill.svg?v=cd5ba3035f0cc13e89ba6cf1dac483a3cf3d5f3d9dc8d67ea99e562384f9be77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
