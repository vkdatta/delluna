export const name="parentheses";
export const id="dl_7d22dcda5c59436c91e4";
export const url=new URL("../icons/parentheses.svg?v=5b1a3a0b5cce9c8642005836f9eebf10b957fdd2a1e69feab6f5b8beb4d1c0ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
