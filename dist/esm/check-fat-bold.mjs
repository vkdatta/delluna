export const name="check-fat-bold";
export const id="dl_8eca35581a1d4c44a277";
export const url=new URL("../icons/check-fat-bold.svg?v=e4f7786b1d8b672dd96bafdf4566e09f128a02853ede16019d6074ab7d14d6f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
