export const name="family_history-fill";
export const id="dl_cff2eb4b42384c79653c";
export const url=new URL("../icons/family_history-fill.svg?v=5f9ea42881b87c053dc50e613dc59d65a9f3b9991497d3fbf3073cc9c5343352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
