export const name="9k_plus-fill";
export const id="dl_cfa0dbbbb90df8a6020c";
export const url=new URL("../icons/9k_plus-fill.svg?v=5231b7b65f8697e7e2b76263fa5eef973c64c36628fff0b969c3cd615148d5f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
