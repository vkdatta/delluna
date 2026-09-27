export const name="paint-bucket-duotone";
export const id="dl_b426ec556bbf417c9edc";
export const url=new URL("../icons/paint-bucket-duotone.svg?v=4fe3aa8cb91fe06760f5529893225de9520aa8f9a8aaafdbb052aee6a2079330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
