export const name="sparkle";
export const id="dl_d43a511bba11000cd232";
export const url=new URL("../icons/sparkle.svg?v=c6c1563d2b6c45f5a218baad92bb757e0c8073b38fc87a84b05e6308dd7963c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
