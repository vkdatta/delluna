export const name="lucid_2-diamond-percent";
export const id="dl_56125e3c902144eba676";
export const url=new URL("../icons/lucid_2-diamond-percent.svg?v=64ea32a2aeee199d02128c5a4d433ab2c6ac65c202808a523edc4fb90dbb0718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
