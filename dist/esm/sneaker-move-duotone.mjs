export const name="sneaker-move-duotone";
export const id="dl_a7f9b6bbba36217e0061";
export const url=new URL("../icons/sneaker-move-duotone.svg?v=defaeadf57e1762bda5d5f45721fccaaade66487029b59751b915c8e0c7dae4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
