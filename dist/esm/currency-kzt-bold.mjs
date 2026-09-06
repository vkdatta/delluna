export const name="currency-kzt-bold";
export const id="dl_7537968a62314beeac19";
export const url=new URL("../icons/currency-kzt-bold.svg?v=a8f20a4b8b8299007f0551b906f90275ac2697eda1b3e96c26e5f9a2c38d6c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
