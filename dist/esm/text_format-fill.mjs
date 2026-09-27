export const name="text_format-fill";
export const id="dl_997d84bc5b9ff9060a67";
export const url=new URL("../icons/text_format-fill.svg?v=c8347430d61e83131f283accc79b26df3085678ef4f6a9e10669297edc6e570f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
