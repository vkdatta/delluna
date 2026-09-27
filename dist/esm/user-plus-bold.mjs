export const name="user-plus-bold";
export const id="dl_1bc3279ad992c1579c2b";
export const url=new URL("../icons/user-plus-bold.svg?v=bb34cde3196909115c45986f6008c1dd4df3b303ed2f0ecaeda1da723515b50c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
