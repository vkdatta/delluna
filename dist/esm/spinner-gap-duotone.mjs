export const name="spinner-gap-duotone";
export const id="dl_84e4cfa226443348b891";
export const url=new URL("../icons/spinner-gap-duotone.svg?v=65e5c37591602635c12804e70875eff956158569d5633f9bf482bf29f3fa90d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
