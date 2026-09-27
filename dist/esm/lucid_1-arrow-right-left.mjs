export const name="lucid_1-arrow-right-left";
export const id="dl_8b11658e8b1c4aba9367";
export const url=new URL("../icons/lucid_1-arrow-right-left.svg?v=c6929dc4d0ad9c0be0679888f2c5d48b24fa235e846add9d78bdd98ed9847b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
