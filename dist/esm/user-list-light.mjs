export const name="user-list-light";
export const id="dl_c461163fff44e3e1dcd4";
export const url=new URL("../icons/user-list-light.svg?v=0b513dabf297d24e5a6c43f7e159f43d7827f12e0e89facbd2c5234873679f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
