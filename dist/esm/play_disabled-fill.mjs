export const name="play_disabled-fill";
export const id="dl_8716630dfdfa977ce633";
export const url=new URL("../icons/play_disabled-fill.svg?v=5a64fcc0b7fe05d1ee11f384af5c28e0c406031c7008468823fae415bc6e6516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
