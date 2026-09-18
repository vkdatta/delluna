export const name="fact_check";
export const id="dl_817519a4f6924dde8170";
export const url=new URL("../icons/fact_check.svg?v=745ce4b983625083b6a58dfad618564418e0981cee5545f8b83cdb54e18c103f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
