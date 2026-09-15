export const name="checkroom-fill";
export const id="dl_44c8c90977354aa5b465";
export const url=new URL("../icons/C/checkroom-fill.svg?v=b6609a83a69bc6eb2b0ea0b3299077d67c7a530f47d684d09ed39dea5531a825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
