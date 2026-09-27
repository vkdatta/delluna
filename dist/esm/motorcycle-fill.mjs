export const name="motorcycle-fill";
export const id="dl_4455835b95db4e8db361";
export const url=new URL("../icons/motorcycle-fill.svg?v=0f42daf12807062339bd80690e0a1c4cf1cd6141d73e55b79121149d94a8f692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
