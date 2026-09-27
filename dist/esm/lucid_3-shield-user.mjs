export const name="lucid_3-shield-user";
export const id="dl_899354618b974e26b2b4";
export const url=new URL("../icons/lucid_3-shield-user.svg?v=cb6888479a3f2be51e1cf82e6589d966e45f471ef73963532b66fe323b302b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
