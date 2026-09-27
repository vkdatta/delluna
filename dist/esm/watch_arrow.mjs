export const name="watch_arrow";
export const id="dl_58aac1d8f8f38bf6a5c4";
export const url=new URL("../icons/watch_arrow.svg?v=52be0ca76469dc96f6ad75b8f3811d85373ff792ed320e6508f5eb207e6e58e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
