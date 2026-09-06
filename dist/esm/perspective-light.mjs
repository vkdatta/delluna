export const name="perspective-light";
export const id="dl_7a478f10893e43c3a81f";
export const url=new URL("../icons/perspective-light.svg?v=a4dbf8e8dd726dcba98c889b6205916cc9a88fcb5acbd4d652f37f698b1d85d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
