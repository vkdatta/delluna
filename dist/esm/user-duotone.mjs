export const name="user-duotone";
export const id="dl_dbb47d9a9cd8484486e1";
export const url=new URL("../icons/U/user-duotone.svg?v=58708fccb6ecc622a23f9fcd4aae24912c660d8f3d502185693ba562bef85674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
