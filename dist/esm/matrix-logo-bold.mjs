export const name="matrix-logo-bold";
export const id="dl_7895658c39c94313b93d";
export const url=new URL("../icons/matrix-logo-bold.svg?v=515bb3d2cab5ac4fc8a800e5a5a4a2162064688d89c193245388e5ab3a02e548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
