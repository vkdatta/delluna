export const name="lucid_1-book-marked";
export const id="dl_5381806f8b764150b3a7";
export const url=new URL("../icons/lucid_1-book-marked.svg?v=a222ea9db293b8aa0f5dd739c99ee2a0817840055efbb4482f76afea8b3c67ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
