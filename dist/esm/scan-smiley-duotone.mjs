export const name="scan-smiley-duotone";
export const id="dl_649b0b513b613f12151e";
export const url=new URL("../icons/scan-smiley-duotone.svg?v=e7c8bf7027307c0b620ab6e72e956354463602f3714fad6b087be6c698b8da42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
