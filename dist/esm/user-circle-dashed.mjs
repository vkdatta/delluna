export const name="user-circle-dashed";
export const id="dl_eee5460a81ba9a658819";
export const url=new URL("../icons/user-circle-dashed.svg?v=c847ba63471daa114cea8ab2267d5e43b9485e9f218ed579759b9db13c184e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
