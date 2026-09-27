export const name="webhooks-logo";
export const id="dl_15a3358537803a63353f";
export const url=new URL("../icons/webhooks-logo.svg?v=2734a40c7d2133a3b1cc5ee7e7b9f2f8312f9ca0baa2a3e61fb33a1e13f87135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
