export const name="settings_system_daydream-fill";
export const id="dl_79aa8841ce6f070dd1b4";
export const url=new URL("../icons/settings_system_daydream-fill.svg?v=c0f396fd51a86529fb941f9c22a089d463cf7b74e146566e7abcb9dfadbef99b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
