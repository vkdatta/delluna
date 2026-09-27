export const name="lucid_2-file-user";
export const id="dl_7a76aa61c90b46798c6b";
export const url=new URL("../icons/lucid_2-file-user.svg?v=78d9f2f2c40bf3d78455a33afff2f0f92faba693e6ace8859a841903ba90dcd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
