export const name="lucid_3-shield-user";
export const id="dl_899354618b974e26b2b4";
export const url=new URL("../icons/lucid_3-shield-user.svg?v=20a2543d6667bec4dd70a5e8e1f3f3aa6d6a77f2fa22f0bfe5022827bd075b5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
