export const name="arrow_top_left-fill";
export const id="dl_eaf1898dae1f65318740";
export const url=new URL("../icons/arrow_top_left-fill.svg?v=177fd3dff4e54012341147da354195b9c1519858eb18782c77ea20dc0c87862f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
