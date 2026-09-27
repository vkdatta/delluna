export const name="thermometer-hot-duotone";
export const id="dl_e28adff150ce83c52f99";
export const url=new URL("../icons/thermometer-hot-duotone.svg?v=dcc61baec502b2310c0217b416ed3397fcb999272c44c09733df2b08c8d36192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
