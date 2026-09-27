export const name="globe-hemisphere-east-fill";
export const id="dl_62ef21cdaeba4a4cba41";
export const url=new URL("../icons/globe-hemisphere-east-fill.svg?v=9aca8592ed608562a9788985a7fa4d821a4c838fe7595a50c5a8f616907ab391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
