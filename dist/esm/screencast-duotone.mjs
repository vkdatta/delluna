export const name="screencast-duotone";
export const id="dl_ee34887234211c5bb90e";
export const url=new URL("../icons/screencast-duotone.svg?v=e6aee652c5c93b39618e0e04361363270e23a00ca8db1a82b538f8af79989801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
