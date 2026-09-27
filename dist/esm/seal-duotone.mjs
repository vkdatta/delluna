export const name="seal-duotone";
export const id="dl_edb1967f313fbcbabb76";
export const url=new URL("../icons/seal-duotone.svg?v=053f11d0ac525ad957574f14904411f26d408481e634aca4d373bf2f6d3d6905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
