export const name="leak_add-fill";
export const id="dl_80e6263b90bd495ea6b2";
export const url=new URL("../icons/L/leak_add-fill.svg?v=b03b9fea90d721712753bfea66df9645257c53d28b9eaaa11f3e1e5ba6fd74ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
