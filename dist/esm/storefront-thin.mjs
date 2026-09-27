export const name="storefront-thin";
export const id="dl_29929dd3a74568c24a0a";
export const url=new URL("../icons/storefront-thin.svg?v=ff356330ee86a9d08972ae7bba4f07f84cc9859f512fd8f542bfdf1d09359582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
