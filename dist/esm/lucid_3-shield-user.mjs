export const name="lucid_3-shield-user";
export const id="dl_899354618b974e26b2b4";
export const url=new URL("../icons/lucid_3-shield-user.svg?v=5fa5c3b19e22820101071b95748e2886cda79141522929164d689d2673f70944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
