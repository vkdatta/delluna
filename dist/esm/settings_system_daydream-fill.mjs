export const name="settings_system_daydream-fill";
export const id="dl_2ad3b67a626c43d4ade8";
export const url=new URL("../icons/settings_system_daydream-fill.svg?v=1e097f848bfc038df886ccf87a36bb1e645b6a4d5dd014cb59019d9a0b457a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
