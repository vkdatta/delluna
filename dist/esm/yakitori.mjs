export const name="yakitori";
export const id="dl_98091eb2ef1241e78d7a";
export const url=new URL("../icons/Y/yakitori.svg?v=56c29f84a29f8c24a82658a39d4aaa46edcef2477c4a2e11d6af13f9f8c85c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
