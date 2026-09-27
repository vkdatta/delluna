export const name="cactus-bold";
export const id="dl_dc095dbb290c450dbc5b";
export const url=new URL("../icons/cactus-bold.svg?v=e40ec86f24d9856d3a03a51748cf25f450262a4ed0669144104d007b620b3c8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
