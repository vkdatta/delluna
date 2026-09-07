export const name="webhooks-logo";
export const id="dl_3e3a3606aaa04dc7b1ce";
export const url=new URL("../icons/W/webhooks-logo.svg?v=6c8997eda3a3346c418c1e56e7ef058a60e18e0243135d81a192136a3a1c7d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
