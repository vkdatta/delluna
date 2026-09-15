export const name="family_restroom-fill";
export const id="dl_1deaba25e4ec47b98412";
export const url=new URL("../icons/F/family_restroom-fill.svg?v=01087bca636ff428b778f95380a2a28f6ea17309065a2c27cbd57fe9c7dcb583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
