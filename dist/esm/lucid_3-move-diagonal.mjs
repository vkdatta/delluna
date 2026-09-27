export const name="lucid_3-move-diagonal";
export const id="dl_7f2e95cac28442d49bea";
export const url=new URL("../icons/lucid_3-move-diagonal.svg?v=38f48403814b5c71eff98eb1b2f644030de0af295856986309c6e5144ee1e1d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
