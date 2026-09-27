export const name="tree-view-bold";
export const id="dl_90dfb23de2e024555d45";
export const url=new URL("../icons/tree-view-bold.svg?v=c4420fefb82ca066ab2c073b90e4abcc445dd23b9b27cdd24bab3a504276448d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
