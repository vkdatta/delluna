export const name="angular-logo-light";
export const id="dl_3aaf621eafd348c8b3b4";
export const url=new URL("../icons/angular-logo-light.svg?v=9d14728373b33edb3d65688d6681ba4f40a0fa919b023268361b5ced461d578a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
