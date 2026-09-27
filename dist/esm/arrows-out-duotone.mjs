export const name="arrows-out-duotone";
export const id="dl_786d9378817f495abd2f";
export const url=new URL("../icons/arrows-out-duotone.svg?v=8ff4488e7d216ad2485d4a0efa242bf02a54e967506e1ff773a6c20833f1ad57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
