export const name="screenshot_tablet-fill";
export const id="dl_85d5eeebe7224461ba6a";
export const url=new URL("../icons/screenshot_tablet-fill.svg?v=87ce368b68917538d5ad96448e8def8d313f1f9cd7e7be44266b4681513d6653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
