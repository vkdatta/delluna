export const name="speaker-none-fill";
export const id="dl_ad8e0aca47874997969a";
export const url=new URL("../icons/S/speaker-none-fill.svg?v=8caccd55c1ab3ae7021ea49fabf0380d87501128fb82e531f5022e009efdc003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
