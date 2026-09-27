export const name="caret-circle-up-fill";
export const id="dl_5d7210383d684d049ec4";
export const url=new URL("../icons/caret-circle-up-fill.svg?v=9214f24c9457d24ce95faa4f375fbf21ddf1cdcf62c8a2dc05e7baff6bb08148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
