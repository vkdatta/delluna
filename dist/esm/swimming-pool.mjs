export const name="swimming-pool";
export const id="dl_08f1eba2dbe8bd457ae5";
export const url=new URL("../icons/swimming-pool.svg?v=fae2a86912628c5398b7c14dc9150fe0860598e5fec4268376131cdb2e21b273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
