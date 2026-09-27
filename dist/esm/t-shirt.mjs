export const name="t-shirt";
export const id="dl_b66609b3ad382d6f1a6e";
export const url=new URL("../icons/t-shirt.svg?v=c73d5b201384f1b45678013fd2950cd0a783990c74444aff6782fb1129240e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
