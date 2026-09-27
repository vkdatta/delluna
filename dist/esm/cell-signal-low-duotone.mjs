export const name="cell-signal-low-duotone";
export const id="dl_b50459de27b54845adba";
export const url=new URL("../icons/cell-signal-low-duotone.svg?v=7c24c580dd6ab9181b4105453b29d3fd9384f1bb72d1d76245af78f876e6d468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
