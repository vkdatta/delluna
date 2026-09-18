export const name="switch_account";
export const id="dl_a94943a751c948fd8953";
export const url=new URL("../icons/S/switch_account.svg?v=881e36952e9878c665316c84a13e1792ab916af354c61d8ba70b28db1f4607ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
