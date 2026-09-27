export const name="frame_exclamation-fill";
export const id="dl_758e6cab8db6a1cc9610";
export const url=new URL("../icons/frame_exclamation-fill.svg?v=2c09fe67fe151bc7d12897e982a69247bdf475fa44689cf024348d482f475461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
