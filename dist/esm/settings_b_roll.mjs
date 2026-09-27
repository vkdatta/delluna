export const name="settings_b_roll";
export const id="dl_ea0a5c52c1481f47307e";
export const url=new URL("../icons/settings_b_roll.svg?v=7476e3065e826614785273d550c9c0d18c99324d491361b1212b4c22fd450afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
