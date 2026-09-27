export const name="switch_access";
export const id="dl_8dd5fa687b191e6be057";
export const url=new URL("../icons/switch_access.svg?v=8145c58a13261dd60f8acc56085438a757268e9ddaa4a2ce589a2d12a1224c4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
