export const name="desktop_landscape_add-fill";
export const id="dl_e06016db60084deea250";
export const url=new URL("../icons/D/desktop_landscape_add-fill.svg?v=2dda01142aee8b42de0f7e7a687677de580a1a31183d81ee616a2b74a4a49a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
