export const name="currency-krw-duotone";
export const id="dl_0e7bbf5ff0404fc38c1b";
export const url=new URL("../icons/currency-krw-duotone.svg?v=1d7b7e2ad99529cbe6a8a8b9d5dfc4a690f73a0575e9a924ada88348133c0f02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
