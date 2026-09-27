export const name="mouse-scroll-duotone";
export const id="dl_0c760a825d1e49a19221";
export const url=new URL("../icons/mouse-scroll-duotone.svg?v=6207a0125ef0ea9d29b68a79a83645080cbab278d6fdec2573bcb7a285959a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
