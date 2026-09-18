export const name="sdk";
export const id="dl_bb46b452ed27499ba8ff";
export const url=new URL("../icons/sdk.svg?v=50d2883cda340f14ff9723b3fe8ea092786dabff3590e9f9ee6acd9488fc5e6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
