export const name="webhooks-logo-fill";
export const id="dl_84e890eb78d5242b0def";
export const url=new URL("../icons/webhooks-logo-fill.svg?v=510303f75e154756bb6870a41f14145c4d127f3866dbad83b50f3039026c29e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
