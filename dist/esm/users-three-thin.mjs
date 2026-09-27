export const name="users-three-thin";
export const id="dl_1dc64ecc875596ad2975";
export const url=new URL("../icons/users-three-thin.svg?v=f6d5007481c6d4d3e3c13ae9f73df70286d9d8f5f82c7d12af95c883b1af8410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
