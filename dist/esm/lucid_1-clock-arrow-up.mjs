export const name="lucid_1-clock-arrow-up";
export const id="dl_36714a94655b422fa810";
export const url=new URL("../icons/lucid_1-clock-arrow-up.svg?v=907492391bda263b2413459fe43bef163abc51cec80f5b92c4d4951eae13799f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
