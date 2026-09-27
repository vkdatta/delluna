export const name="hoodie-fill";
export const id="dl_17a217bac6e946d1941b";
export const url=new URL("../icons/hoodie-fill.svg?v=cf97ee32f23c9951a452b565a5ab0fab9cf231cf2ae07a3b230198acdd3911d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
