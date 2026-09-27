export const name="selection-foreground-duotone";
export const id="dl_763c985cced227e5ee4e";
export const url=new URL("../icons/selection-foreground-duotone.svg?v=6928ccd4590d13e3812410b62a228bbfd6a76066abc9d09d3b80c283ec5d1f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
