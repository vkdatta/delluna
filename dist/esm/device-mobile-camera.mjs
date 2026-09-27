export const name="device-mobile-camera";
export const id="dl_10e373756fec4e7ba554";
export const url=new URL("../icons/device-mobile-camera.svg?v=e16c15d239741f20a3f5cc864f3cad3a5bfd673a7d63cb3b679b6bd5dae67621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
