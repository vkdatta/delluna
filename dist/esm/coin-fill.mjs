export const name="coin-fill";
export const id="dl_3e952df4508448488078";
export const url=new URL("../icons/coin-fill.svg?v=de45b85d326c0bd706f757f187a0a83ea00dd2eb53ee7712356bb50df03a06d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
