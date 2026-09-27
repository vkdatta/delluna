export const name="alien-duotone";
export const id="dl_933ffacd29b7453185e2";
export const url=new URL("../icons/alien-duotone.svg?v=33569409b3fd7b149abcc113de32574926eefcfd4cf7dfb4f591fdf817a3b7b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
