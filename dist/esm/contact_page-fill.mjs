export const name="contact_page-fill";
export const id="dl_274c73c6e36dce621569";
export const url=new URL("../icons/contact_page-fill.svg?v=044d7131d166faea221333474a3d9fe01aa8893241ff5ac0c94dad4ad950cae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
