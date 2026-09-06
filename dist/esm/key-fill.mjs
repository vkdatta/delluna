export const name="key-fill";
export const id="dl_dacd55e95b3f46b58b4f";
export const url=new URL("../icons/key-fill.svg?v=25be8ade7785508b97dc19ed87ae952351d7cfe20a5fbdbe9655df2fe6af4e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
