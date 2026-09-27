export const name="axe-light";
export const id="dl_fb080c8b0e9b45699823";
export const url=new URL("../icons/axe-light.svg?v=67dffa1b7bff1c757cdb9b44a0e56e45f662347748204ed0ac58114c91e5d98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
