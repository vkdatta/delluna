export const name="carpenter-fill";
export const id="dl_9f3552f42ec7d583444c";
export const url=new URL("../icons/carpenter-fill.svg?v=8f9b234e945bfd9a52069e4545dccd4a7ebac674e48cbd53e91cb44b54e758e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
