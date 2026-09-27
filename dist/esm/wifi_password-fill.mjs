export const name="wifi_password-fill";
export const id="dl_44027ebc2f7e96b6d05f";
export const url=new URL("../icons/wifi_password-fill.svg?v=903cb8df8efc34689302846f094cb56a1076c6d0ab225a3179a2ee0540cfa521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
