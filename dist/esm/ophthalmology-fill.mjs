export const name="ophthalmology-fill";
export const id="dl_41bc9ae74d044456a2dc";
export const url=new URL("../icons/ophthalmology-fill.svg?v=542c710ce4448fb3ecdb603908db4af3c0df81cc5846008f321395c09fcde30f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
