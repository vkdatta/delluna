export const name="caret-line-left-thin";
export const id="dl_aaf27e50688f44629b89";
export const url=new URL("../icons/caret-line-left-thin.svg?v=0515fb723a92eeeb5615f2a339f3d307dbf3ecd9e75cab6dda855f5314f99cb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
