export const name="looks_3-fill";
export const id="dl_e09156f6ec0dddd10cfa";
export const url=new URL("../icons/looks_3-fill.svg?v=a8f7a05e45ff06acc8a6c18ef77a192392770c2cd5399b108b51078d1af5b2f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
