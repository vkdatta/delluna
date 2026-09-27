export const name="caret-double-right-thin";
export const id="dl_f8677353f5294ceca99f";
export const url=new URL("../icons/caret-double-right-thin.svg?v=4d8bdb8047cda289dc41815b8e315ce051fe0a638ad054a4c17d1f066dd726b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
