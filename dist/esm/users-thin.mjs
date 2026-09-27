export const name="users-thin";
export const id="dl_0593d2ff4b3d322fd4ae";
export const url=new URL("../icons/users-thin.svg?v=0f49acf46ab1d813ec86700bbebd730003fcc4b2152d0461b9a2a016863eb8a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
