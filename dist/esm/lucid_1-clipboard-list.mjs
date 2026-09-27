export const name="lucid_1-clipboard-list";
export const id="dl_3483ea703e9e4a569830";
export const url=new URL("../icons/lucid_1-clipboard-list.svg?v=b94d1a39ad1bf234af0adf85e31acbe7bd3179e59bc150cdf41a6dce8e24569c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
