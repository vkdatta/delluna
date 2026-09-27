export const name="lock-simple";
export const id="dl_cceb62ba5ba3403d9d5f";
export const url=new URL("../icons/lock-simple.svg?v=b2fa654ea47a8ac0041ebd8aec687cf1a9cfef0c3e6e95be124f96b2cd522f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
