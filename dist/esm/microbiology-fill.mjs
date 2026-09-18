export const name="microbiology-fill";
export const id="dl_28460e7523b44c4abdb9";
export const url=new URL("../icons/M/microbiology-fill.svg?v=10a8c14d6f8108f786cd9d061b90782b0507a0d7ea6e2dc4a59e82b30afbee73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
