export const name="circle-half-light";
export const id="dl_56ed74bf945b41768f90";
export const url=new URL("../icons/circle-half-light.svg?v=4ddd5675dbea69b4fc39706c5dfd78582a1163cae001722ec6ad36724dba48af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
