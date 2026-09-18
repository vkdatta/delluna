export const name="settings_brightness";
export const id="dl_b785d9232097490398a5";
export const url=new URL("../icons/S/settings_brightness.svg?v=403632b4ed357cdbe9b1bdf82753203932e5f92986227abf39045473ec8fba62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
