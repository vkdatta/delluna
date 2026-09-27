export const name="lock-bold";
export const id="dl_b3f68fffd3314cd09197";
export const url=new URL("../icons/lock-bold.svg?v=39701091ba834e196f59a90c27ac4815fc21864cbf90724604374e388a286af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
