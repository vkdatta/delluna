export const name="extension";
export const id="dl_98e6fa4b116fe40322c5";
export const url=new URL("../icons/extension.svg?v=161e282c349dd4ed66e293fcf4b0d6a3d03344deb5019925f37f866b37de275b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
