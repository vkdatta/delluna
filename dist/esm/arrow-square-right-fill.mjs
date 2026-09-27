export const name="arrow-square-right-fill";
export const id="dl_1ae0a1ef1af847668155";
export const url=new URL("../icons/arrow-square-right-fill.svg?v=7d413aeffa1cb7c49d94af0a1d5ba20fd14ff0258cdacb5d3f0d6e8181735689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
