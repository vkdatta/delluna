export const name="globe-hemisphere-west-fill";
export const id="dl_57f8da70916b42e68446";
export const url=new URL("../icons/globe-hemisphere-west-fill.svg?v=966cb01796944140d1b0e384fca020aa0b0fd9b7fb444760ab0afa558c5578ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
