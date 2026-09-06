export const name="globe-x-bold";
export const id="dl_925e9f2e41444a028ac9";
export const url=new URL("../icons/globe-x-bold.svg?v=4b3557af23e4f13f815bd9b50cf4a24b1d3c142d2fbc370f09c3ec3835803ccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
