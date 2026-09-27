export const name="refresh-fill";
export const id="dl_f03c39edbabfe2ee8f45";
export const url=new URL("../icons/refresh-fill.svg?v=10e5ff34c3c1a5ff46ec0dd581eda9f4a141110dac573353ad6fb4ecb4733250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
