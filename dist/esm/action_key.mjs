export const name="action_key";
export const id="dl_ab7529362fe4b35c8d33";
export const url=new URL("../icons/action_key.svg?v=aa79bf93a900d34553c86fe6a28f342f3d71b6d258570568ac0c8697b00b042a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
