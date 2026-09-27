export const name="price_change-fill";
export const id="dl_af1e99256bde69a69f40";
export const url=new URL("../icons/price_change-fill.svg?v=622ec6edfd1cf915cc9e2276aca7d61b658e9599921ff9e7f5435f7830612b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
