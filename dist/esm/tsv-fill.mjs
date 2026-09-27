export const name="tsv-fill";
export const id="dl_1f56158591e85cede989";
export const url=new URL("../icons/tsv-fill.svg?v=90816d311049fe7aa453711978efdd340f67448cc414bbd7339bb36daceae47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
