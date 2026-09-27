export const name="racquet";
export const id="dl_f1620339e6d649e383ba";
export const url=new URL("../icons/racquet.svg?v=cddace9aad17637ac9bf8b863325140ca503d88cf34d6655f668a4415771f3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
