export const name="globe-hemisphere-east-fill";
export const id="dl_62ef21cdaeba4a4cba41";
export const url=new URL("../icons/globe-hemisphere-east-fill.svg?v=a6e4f3153361e6f9e4f61a86e89f83375ebdeadea4f536cbf879a6bc5cd3a41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
