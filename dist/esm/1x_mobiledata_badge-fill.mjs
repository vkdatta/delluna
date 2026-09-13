export const name="1x_mobiledata_badge-fill";
export const id="dl_0472c6e127144f5c8556";
export const url=new URL("../icons/1/1x_mobiledata_badge-fill.svg?v=566af7adcbbe0b4ff5d7e360725c54bc7dfd3864c33b5635c552e4eea227e93e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
