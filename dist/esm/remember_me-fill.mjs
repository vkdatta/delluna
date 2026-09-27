export const name="remember_me-fill";
export const id="dl_2ceab01d649ffd5c6b88";
export const url=new URL("../icons/remember_me-fill.svg?v=6484987bea0794ad095f27281e4c04e123ebc0c95ce796316aebb7f698f824f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
