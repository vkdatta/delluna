export const name="headlights-duotone";
export const id="dl_937ebb86d34c4bcfbcc8";
export const url=new URL("../icons/headlights-duotone.svg?v=e1d90bdb5fd37cb656ac3fbecf68f1c2c7a37ee777674e615b5b0d8befd917c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
