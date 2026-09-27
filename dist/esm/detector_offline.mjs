export const name="detector_offline";
export const id="dl_0229517ea7cd5c95a786";
export const url=new URL("../icons/detector_offline.svg?v=692a948612ee7ef392209baf7daf1fa0038af8fb74a581758c1ef01ef14b8d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
