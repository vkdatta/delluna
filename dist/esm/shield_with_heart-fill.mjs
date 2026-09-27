export const name="shield_with_heart-fill";
export const id="dl_1b4ff7b754447de6ad9e";
export const url=new URL("../icons/shield_with_heart-fill.svg?v=a802fc445f9dafbeac998b0587b8d75557cf722c003cb1f1a3b149f3a4f68cc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
