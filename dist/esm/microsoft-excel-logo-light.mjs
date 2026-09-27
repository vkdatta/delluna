export const name="microsoft-excel-logo-light";
export const id="dl_94903cac73254e3790b4";
export const url=new URL("../icons/microsoft-excel-logo-light.svg?v=eb4d6d20fa668350915c5b45690a2c6b795ee9305dc03854b7e4a0ca4ab4ab90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
