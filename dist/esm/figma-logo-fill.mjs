export const name="figma-logo-fill";
export const id="dl_e06607ed1005445d917e";
export const url=new URL("../icons/figma-logo-fill.svg?v=178bcde3ab16794800761d7496a4e99b7d9fc6c7c5f52280e6e80896b1ffe19c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
