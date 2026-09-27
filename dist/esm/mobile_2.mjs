export const name="mobile_2";
export const id="dl_f5db5b613b84d33b3472";
export const url=new URL("../icons/mobile_2.svg?v=c290156bd3923b34a0198b5a2c4043fd012d10cc4c2c067e02191d84aa0da34a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
