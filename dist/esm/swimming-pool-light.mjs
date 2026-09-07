export const name="swimming-pool-light";
export const id="dl_f4964e26d39144559466";
export const url=new URL("../icons/S/swimming-pool-light.svg?v=cce0a16558c86e0a9f821d228098180f544a2a8f563a3294dbab5e664ef65ef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
