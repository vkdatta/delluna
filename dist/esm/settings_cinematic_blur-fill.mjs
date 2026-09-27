export const name="settings_cinematic_blur-fill";
export const id="dl_53a6ffb59bc605966736";
export const url=new URL("../icons/settings_cinematic_blur-fill.svg?v=bb0045f6ad53392410f2468d166a5d422fb6d6b66e3f59c11d995cfffd117b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
