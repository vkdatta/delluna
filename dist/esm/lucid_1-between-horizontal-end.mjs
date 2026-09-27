export const name="lucid_1-between-horizontal-end";
export const id="dl_4fce8e308bd74dffb536";
export const url=new URL("../icons/lucid_1-between-horizontal-end.svg?v=b0aa7c32789b742a5b2958ae4b6ba212d5f7507e622ee1eb78fc209c6bb07229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
