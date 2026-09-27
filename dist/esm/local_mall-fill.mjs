export const name="local_mall-fill";
export const id="dl_97d9d1cc4637a9239d1b";
export const url=new URL("../icons/local_mall-fill.svg?v=8304b56a238867c3e6da81e41ddf65548afa478e7b4850ee3c0c59a027e377a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
