export const name="local_car_wash-fill";
export const id="dl_ac3cf7c920e5f7a7be57";
export const url=new URL("../icons/local_car_wash-fill.svg?v=6bab822803d2df03cf6267dfc2102ff92084124ed15e24bfa312502751bb75e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
