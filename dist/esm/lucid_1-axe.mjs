export const name="lucid_1-axe";
export const id="dl_8ab1c97b63c0470ab8c5";
export const url=new URL("../icons/lucid_1-axe.svg?v=6fa996c38119a13107dbe1d2515f271cbe84336236c67e231519dd8af54cb3ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
