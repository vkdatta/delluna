export const name="high_quality-fill";
export const id="dl_1363255c001f2fd5851a";
export const url=new URL("../icons/high_quality-fill.svg?v=1ee6701259eeb773cedb3085ab4c792970abee6501718b8e90ad4e734ee5fc27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
