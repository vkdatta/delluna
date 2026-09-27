export const name="storm";
export const id="dl_07413fe5e4feb51d54c8";
export const url=new URL("../icons/storm.svg?v=6e8f2830a120a636f8f21d53e70a7b2e62fe59e22baaf66dfcc9d6b6923030e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
