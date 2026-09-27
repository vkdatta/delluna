export const name="check-fat";
export const id="dl_1f05f09742aa4b6aa9ea";
export const url=new URL("../icons/check-fat.svg?v=76bc8af99bd78b5e760a1d19f0b687de6f33f95241a617a30fb355d3ffd54476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
