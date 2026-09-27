export const name="function-light";
export const id="dl_6900afb537fb42b0a6b4";
export const url=new URL("../icons/function-light.svg?v=0be76b306b73c4f87d16cefd6b30b62e08c0df8436627c521c4043219b9802fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
