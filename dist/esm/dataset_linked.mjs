export const name="dataset_linked";
export const id="dl_84e3fa9ea217f379f4e6";
export const url=new URL("../icons/dataset_linked.svg?v=a8bfd74dff36d290240dbf01082a14307c74e381f6208bca16098d0fecd4fe81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
