export const name="lucid_3-smartphone-nfc";
export const id="dl_f5e5509a285148d18ad4";
export const url=new URL("../icons/lucid_3-smartphone-nfc.svg?v=579767a845852e99eef70ec1e594d3bfb3dbafaf1a6e8916f3c9d70da858415b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
