export const name="radical";
export const id="dl_1f83da303a2940b09e80";
export const url=new URL("../icons/radical.svg?v=7bf25e8bf455d1d5dd2340260dfb75732ac0c9c03afc1ff6308e94b263aa01f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
