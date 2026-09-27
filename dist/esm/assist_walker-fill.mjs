export const name="assist_walker-fill";
export const id="dl_c03cf4308ce3ae2ae997";
export const url=new URL("../icons/assist_walker-fill.svg?v=5dc0cbfa90a10e2387fddc64dc629ff23090343667dcaa63c73d4f6ad5d9588b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
