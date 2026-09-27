export const name="currency-krw-duotone";
export const id="dl_0e7bbf5ff0404fc38c1b";
export const url=new URL("../icons/currency-krw-duotone.svg?v=cae5342fdfad88e881c29fe6261af787c6c1b77e060fe78387a5196ed735f1b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
