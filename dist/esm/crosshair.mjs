export const name="crosshair";
export const id="dl_b89a97b539f54f86a9b3";
export const url=new URL("../icons/crosshair.svg?v=8adb09b9805508139d1b62338506ed50c5c323ebb970f87e0911810051d5f870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
