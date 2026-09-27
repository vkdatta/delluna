export const name="desktop-tower-duotone";
export const id="dl_bd54b402f37742358b41";
export const url=new URL("../icons/desktop-tower-duotone.svg?v=bed23f20f11b8596bdf7f7e1bffed31a2705b3d38d33d2ff05f76518aa42b72a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
