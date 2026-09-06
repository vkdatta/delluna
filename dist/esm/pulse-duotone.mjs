export const name="pulse-duotone";
export const id="dl_42ce226f415f434ab82c";
export const url=new URL("../icons/pulse-duotone.svg?v=fac71608af59b30ae8bfa560978ef9a7e149c9db72bf00cbd2cab741e535f919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
