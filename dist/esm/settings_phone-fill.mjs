export const name="settings_phone-fill";
export const id="dl_a1e3407736614a3cbd60";
export const url=new URL("../icons/S/settings_phone-fill.svg?v=e21da46ffcf40e2232e2144e2c0ab825dd015acfd690d479ddced3cc373aa68d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
