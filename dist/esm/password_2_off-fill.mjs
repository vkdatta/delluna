export const name="password_2_off-fill";
export const id="dl_ff564203dd08481ead98";
export const url=new URL("../icons/P/password_2_off-fill.svg?v=c5d97150b794e634ff185a931a779a85438d912bd62f8c0324e4085ced85f869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
