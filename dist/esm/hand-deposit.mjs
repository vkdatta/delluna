export const name="hand-deposit";
export const id="dl_1b14519ceef74688b47b";
export const url=new URL("../icons/hand-deposit.svg?v=5b25ddc561ff5d7665796bd9be3a8e56b635467dcae4770044850fc30054dcea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
