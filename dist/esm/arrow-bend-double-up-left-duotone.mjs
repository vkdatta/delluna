export const name="arrow-bend-double-up-left-duotone";
export const id="dl_3d6f77fa79cf4707b11d";
export const url=new URL("../icons/arrow-bend-double-up-left-duotone.svg?v=97e02e3a53dc3e4ca1c50574b0b636b5e9128839c361351cb5f2e9f04a2789d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
