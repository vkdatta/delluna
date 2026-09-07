export const name="article-medium-bold";
export const id="dl_80caad8dee404e7abb3b";
export const url=new URL("../icons/article-medium-bold.svg?v=490ea06adb2c9b2373f60bc7fb37261cc00281abce95eac77c7eb21219065465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
