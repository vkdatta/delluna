export const name="mobile_layout-fill";
export const id="dl_ca15f6122a64334e5153";
export const url=new URL("../icons/mobile_layout-fill.svg?v=ffbfd50a59d612e540ef1659f899e1c4badddd15377879cf7b2bc16a73fff2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
