export const name="detector_offline-fill";
export const id="dl_2eed4ea3a5e448176ee6";
export const url=new URL("../icons/detector_offline-fill.svg?v=28066c973b5f5e95b9fd4378c6c2a64c24d51b83ff9141792e184ff672efca3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
