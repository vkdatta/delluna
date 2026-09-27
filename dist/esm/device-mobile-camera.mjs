export const name="device-mobile-camera";
export const id="dl_10e373756fec4e7ba554";
export const url=new URL("../icons/device-mobile-camera.svg?v=7a817ecc4811e9c6b233f315683b7124bb8b12a986f093daaf2b5d8d6abe1abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
