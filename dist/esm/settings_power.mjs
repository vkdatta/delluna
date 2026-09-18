export const name="settings_power";
export const id="dl_e367ddecf4764a89893f";
export const url=new URL("../icons/settings_power.svg?v=7ee60682d7a20e1c53d19ed2c4ae2a7f67d41e31b5dd9ccb7fba2984e51fe5a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
