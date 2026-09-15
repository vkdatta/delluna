export const name="bike_dock-fill";
export const id="dl_c2b52d9db7f241cb90d7";
export const url=new URL("../icons/B/bike_dock-fill.svg?v=1429e217ac5a30ff094d50b2a38fd62d4f380af44495ed914cb11e456643929f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
