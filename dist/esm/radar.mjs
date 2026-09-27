export const name="radar";
export const id="dl_2bd28d88ed3dd99610f8";
export const url=new URL("../icons/material_symbols/radar.svg?v=236675904d2ddb57f2fa02ec4a1aee0eb7336ddba2e5b5f7ec5643cd25462cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
