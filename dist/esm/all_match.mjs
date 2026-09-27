export const name="all_match";
export const id="dl_8a540290b282d544b8e8";
export const url=new URL("../icons/all_match.svg?v=a6d74548eeafb7273cf538b16ea1d26c82fff9099a5deda22b78abdac47787a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
