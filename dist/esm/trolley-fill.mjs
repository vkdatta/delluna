export const name="trolley-fill";
export const id="dl_a26c10149a004f69b11d";
export const url=new URL("../icons/T/trolley-fill.svg?v=007f3ef40a10ba531af3d21ec4a614a2be8c99bcff20e8530a663cab8e9ee17a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
