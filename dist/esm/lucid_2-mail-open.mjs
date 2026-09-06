export const name="lucid_2-mail-open";
export const id="dl_251920c22c4b411994b6";
export const url=new URL("../icons/lucid_2-mail-open.svg?v=9f67fe19f71e3f361f1d728310bf352d5b6425ef1932a278626ea4236df0ec3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
