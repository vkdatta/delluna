export const name="settings_screen";
export const id="dl_e236ed0d11cfa18904ef";
export const url=new URL("../icons/settings_screen.svg?v=0ff9ae803cef0f61eff362f0260636e6e0d50fefd11c7d8d8a2cabc520393629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
