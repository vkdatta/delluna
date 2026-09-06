export const name="lucid_3-map-pinned";
export const id="dl_6df0129632644f6497b3";
export const url=new URL("../icons/lucid_3-map-pinned.svg?v=21964ec8cca77e9e182109cf5211399343915a4ff3024e4f479ac979bdd5ade5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
