export const name="framer-logo-fill";
export const id="dl_f2e26a854bb24a38a7a1";
export const url=new URL("../icons/framer-logo-fill.svg?v=bb3d28e3c9cfccb43e9090bda0988826ab757ddc7ea2b884197ef9b70ca3e8a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
