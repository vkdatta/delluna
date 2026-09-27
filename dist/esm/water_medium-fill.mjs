export const name="water_medium-fill";
export const id="dl_dcddfa95be3daef0c951";
export const url=new URL("../icons/water_medium-fill.svg?v=be6c300ea0a7eca2aba0bdb8b3f63add14731b8181115d30038beeafcdcb6e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
