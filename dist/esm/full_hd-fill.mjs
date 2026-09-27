export const name="full_hd-fill";
export const id="dl_1db2b460d0da6db02eb0";
export const url=new URL("../icons/full_hd-fill.svg?v=1098b591d4482b1f0a62e8d1c80ee44073ce78a0de420d1ff48d1ef0d2938bdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
