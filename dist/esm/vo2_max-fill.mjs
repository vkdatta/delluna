export const name="vo2_max-fill";
export const id="dl_dbf007ba41a845ec8342";
export const url=new URL("../icons/V/vo2_max-fill.svg?v=c79f012ddf99878a1ac96601208ae40726790758485198899f7fa2618b9d0585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
