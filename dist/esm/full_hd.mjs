export const name="full_hd";
export const id="dl_f7bbb5eff44b46a92e86";
export const url=new URL("../icons/full_hd.svg?v=3c229f79359903ee1f28fd95d11df899e0fcb60931be89f87b6a3260fd1d543d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
