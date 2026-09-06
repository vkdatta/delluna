export const name="call-bell-duotone";
export const id="dl_0206e79940404bfca3f8";
export const url=new URL("../icons/call-bell-duotone.svg?v=f665fb1b8345b6f1821757f40cdea746768212fc862d60f493b3d5479ddcaf61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
