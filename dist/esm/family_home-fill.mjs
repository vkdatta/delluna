export const name="family_home-fill";
export const id="dl_05264d3e964e47188598";
export const url=new URL("../icons/family_home-fill.svg?v=af6eb72739ec16294f6f96364caa88e4d330fe7204f544e0637a3ecfb38522a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
