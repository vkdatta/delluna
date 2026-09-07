export const name="rainbow-duotone";
export const id="dl_dc475f48078a4b9fa288";
export const url=new URL("../icons/rainbow-duotone.svg?v=539e2083a97bc559b7cf294c4c254d2ddf310d02f7457f51fab7ac0c56c9dce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
