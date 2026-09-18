export const name="wifi_find-fill";
export const id="dl_1c779ca4e7774d4e824a";
export const url=new URL("../icons/wifi_find-fill.svg?v=9d81ca767c897e2a1a1f0a9b95de6832afc59257c97430cb89d5949749b8bf64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
