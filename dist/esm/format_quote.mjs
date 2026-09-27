export const name="format_quote";
export const id="dl_96b3c7e016f10a5c2444";
export const url=new URL("../icons/format_quote.svg?v=a108f6b1feb8f4d89c59655b96fc2c926ac268fa1ea423d6a66c1a15fd09cab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
