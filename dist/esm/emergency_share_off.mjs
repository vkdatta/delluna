export const name="emergency_share_off";
export const id="dl_7f371ee3912a3e3523d7";
export const url=new URL("../icons/emergency_share_off.svg?v=abb95b195d784c639a278127c1fb86182645fff76e693ead64aadee6bbbd360f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
