export const name="credit-card-bold";
export const id="dl_abe7ca05106f47e68ee5";
export const url=new URL("../icons/credit-card-bold.svg?v=b1585b4890455918e3111da77b5591d2f0a73925e3d444b66c20eb8aa7270caf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
