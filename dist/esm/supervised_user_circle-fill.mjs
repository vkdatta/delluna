export const name="supervised_user_circle-fill";
export const id="dl_2bc07672c3a475725f19";
export const url=new URL("../icons/supervised_user_circle-fill.svg?v=f236d9c71ddb53b56e41b5625978a4716410b254fd41c9ad62abba491d0830bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
