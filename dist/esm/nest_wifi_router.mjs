export const name="nest_wifi_router";
export const id="dl_75febe71422b45f28f2b";
export const url=new URL("../icons/N/nest_wifi_router.svg?v=e80d0129a1c07cb76bddfc122d872d1064159d4494d436612772170cdfb265cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
