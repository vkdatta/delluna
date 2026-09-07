export const name="lucid_2-germ-off";
export const id="dl_e182afe6b140406fa1fa";
export const url=new URL("../icons/lucid_2-germ-off.svg?v=697d0cc4dc83a4f5f58a0da3850998d90ed631e800064c91c91135ccb9550c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
