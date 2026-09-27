export const name="square_dot";
export const id="dl_30b98c9be22cee7b571f";
export const url=new URL("../icons/square_dot.svg?v=bcd2730e6904f1cabab8c19a8cc55fab7d0297191bc366f6d28cb457cad40366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
