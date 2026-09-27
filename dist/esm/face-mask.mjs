export const name="face-mask";
export const id="dl_cc9bdbc2fcc44aafb8d7";
export const url=new URL("../icons/face-mask.svg?v=94ab06471b3c07bd0bcee4f432ee0dc776ad8b5c53349ef38c0a2a6c24f52c15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
