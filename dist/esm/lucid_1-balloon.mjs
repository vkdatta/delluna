export const name="lucid_1-balloon";
export const id="dl_732cddce2cba4b349aeb";
export const url=new URL("../icons/lucid_1-balloon.svg?v=63da78f020c696498038052c7938ae6a9db2c3ea02e69e3faa30e5c6b93aba31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
