export const name="nest_wifi_point-fill";
export const id="dl_ce68e2f8f3ec5202777d";
export const url=new URL("../icons/nest_wifi_point-fill.svg?v=8cb23b4d89f1dab4efbdaae350a56a75d65257f08127acd9521f2e12ed47d82c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
