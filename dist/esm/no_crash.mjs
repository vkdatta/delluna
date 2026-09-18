export const name="no_crash";
export const id="dl_a0a62d927fd34d119863";
export const url=new URL("../icons/no_crash.svg?v=c763b822db5313d5a5434baf9f4ff27a70f38bd755e0f8d27b5efe571ab86677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
