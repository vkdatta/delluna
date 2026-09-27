export const name="faucet";
export const id="dl_51347cbdfe49ea2e22f1";
export const url=new URL("../icons/faucet.svg?v=000bf26ac0beea9aa458add9119155c1b4b1249f989e5dd6af857d43f6e7b790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
