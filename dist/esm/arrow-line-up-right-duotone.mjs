export const name="arrow-line-up-right-duotone";
export const id="dl_cf817d30969d4e8b9e83";
export const url=new URL("../icons/arrow-line-up-right-duotone.svg?v=7eb5dcab454823490dbb46ae9527a24b17227d34ca8d68c4e7d8d16255177718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
