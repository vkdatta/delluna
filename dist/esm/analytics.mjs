export const name="analytics";
export const id="dl_3e3603f5a79bdc1a889f";
export const url=new URL("../icons/analytics.svg?v=f566aa994f2231f4884eeaedfd67c9fa73d146fbe23d25d84f85df07a139470b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
