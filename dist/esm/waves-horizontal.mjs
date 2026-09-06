export const name="waves-horizontal";
export const id="dl_99504ee65e1d456e892a";
export const url=new URL("../icons/waves-horizontal.svg?v=036082a9b06474107079ed5200c2fb65842091647ce7dd4edde2811672ca4561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
