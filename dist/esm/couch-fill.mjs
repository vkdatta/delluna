export const name="couch-fill";
export const id="dl_bd6637491d7c4252a7c6";
export const url=new URL("../icons/couch-fill.svg?v=687fd4ffab491feb9a21c2556cb8fe95ef90d1404dc5d930513e7e3dd0d1bedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
