export const name="number-circle-zero";
export const id="dl_545ddd3d0560421986e1";
export const url=new URL("../icons/number-circle-zero.svg?v=7b70138341d099d2a57439351430bf6e2d59516351ff21437a4d13460dc56f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
