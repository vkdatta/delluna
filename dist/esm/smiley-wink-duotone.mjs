export const name="smiley-wink-duotone";
export const id="dl_e20c68b22b7fac583db5";
export const url=new URL("../icons/smiley-wink-duotone.svg?v=9daab131fd04bf0eb29f3064b78d9174e5fc7ed1809e423fff4ed9dc865f8c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
