export const name="microsoft-excel-logo-light";
export const id="dl_94903cac73254e3790b4";
export const url=new URL("../icons/microsoft-excel-logo-light.svg?v=8d6c189dbbe3a30bb1138165d17b251a954fa3e2d771b738e8e1e89146241b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
