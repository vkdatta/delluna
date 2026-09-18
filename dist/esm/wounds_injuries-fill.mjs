export const name="wounds_injuries-fill";
export const id="dl_f7421fe8c7a34496bfc5";
export const url=new URL("../icons/W/wounds_injuries-fill.svg?v=8e3533bd99e7ccfcc9f13e8cd88e1f6ced5f1765e2742cb843a07558baa0fee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
