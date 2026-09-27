export const name="sim-card-bold";
export const id="dl_d1c4958511bab72b8a60";
export const url=new URL("../icons/sim-card-bold.svg?v=c4cd4b6be0e91cac4e7a4920cea530b2235950e318835f38d1868d807f52c6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
