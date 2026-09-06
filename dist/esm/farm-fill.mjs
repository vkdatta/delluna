export const name="farm-fill";
export const id="dl_35d7718d37864785af29";
export const url=new URL("../icons/farm-fill.svg?v=87e3a9189a4d4ae1e305a62c2465939773014a683c9222df81ea14dd4b86cfe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
