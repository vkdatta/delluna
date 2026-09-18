export const name="mobile_rotate_lock-fill";
export const id="dl_981b30386d624f2fa265";
export const url=new URL("../icons/M/mobile_rotate_lock-fill.svg?v=e5cd85eb6a201daf2324820f6b87b612b165d020ddffe57656322aff208f7c5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
