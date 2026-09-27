export const name="sunglasses-duotone";
export const id="dl_88916f5c38779f7a22e6";
export const url=new URL("../icons/sunglasses-duotone.svg?v=d786217a9b5e1d9db32998b788d72e52452919ed6dcf6625a14e67cd71dba044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
