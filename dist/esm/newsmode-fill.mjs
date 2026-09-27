export const name="newsmode-fill";
export const id="dl_25008521a3e14bcbc4c8";
export const url=new URL("../icons/newsmode-fill.svg?v=4554abbba8953a0832bce79f2956bb3631adf22c3e692d85540210bab3148572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
