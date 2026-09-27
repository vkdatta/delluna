export const name="dark_mode";
export const id="dl_7f9db5d52006995a4cc1";
export const url=new URL("../icons/dark_mode.svg?v=cbd9930f2f644ad9d73ae10ca4040437199c34740847936cc7022b22ed7e23e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
