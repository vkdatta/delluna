export const name="first-aid-duotone";
export const id="dl_0b85f340eb0846929cb9";
export const url=new URL("../icons/first-aid-duotone.svg?v=c87abf7b441c88290a3ccf3fe48d1dbd19baae53c2727b85f1aa0474ea5eda1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
