export const name="caret-line-right-duotone";
export const id="dl_978d7c0b67644c638efe";
export const url=new URL("../icons/caret-line-right-duotone.svg?v=2b2d4bfdbeea8b4324dd6085b87c4d0530014dacccbae5ea63408e58b0fb266f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
