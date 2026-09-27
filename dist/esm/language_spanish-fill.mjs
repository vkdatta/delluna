export const name="language_spanish-fill";
export const id="dl_8b15e153e78891088d0b";
export const url=new URL("../icons/language_spanish-fill.svg?v=aa68bf80988be29c330b37dc8c3f6ce699cd71ddbe64dd61a442f0b69e69fd31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
