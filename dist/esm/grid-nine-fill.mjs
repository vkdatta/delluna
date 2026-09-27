export const name="grid-nine-fill";
export const id="dl_e8d56d9611b94fd6b51d";
export const url=new URL("../icons/grid-nine-fill.svg?v=a3afe23f4cefa4d9007a5cf3b5426bf356a586799697bc50ebe53eb7ac09b422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
