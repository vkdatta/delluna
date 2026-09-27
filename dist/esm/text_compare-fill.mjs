export const name="text_compare-fill";
export const id="dl_93683f44cfd5c4d01f0b";
export const url=new URL("../icons/text_compare-fill.svg?v=365fedc22f57bf4b4250b5d93dd6b734525f29cbd7e4efda1cb46df8bab326d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
