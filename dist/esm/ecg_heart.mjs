export const name="ecg_heart";
export const id="dl_0abb2ed91f5b4fafab3a";
export const url=new URL("../icons/ecg_heart.svg?v=6682ce070c054a04f5bebab60f4fe4627f31f8da42d33ae4c9542e33e9989ffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
