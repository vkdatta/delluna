export const name="grass";
export const id="dl_ee653c8f0aec4eac972f";
export const url=new URL("../icons/G/grass.svg?v=fe843defba8722839f5c7262c46d2bef305a8f472a58bbd5ca0803fc664aaf8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
