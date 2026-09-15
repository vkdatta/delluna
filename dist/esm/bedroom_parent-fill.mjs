export const name="bedroom_parent-fill";
export const id="dl_0667c521814d4bbabe18";
export const url=new URL("../icons/B/bedroom_parent-fill.svg?v=6e8cfcc3d994f71cb16a1198d21821bfa028c69f4e162b2cf01fe574985aac4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
