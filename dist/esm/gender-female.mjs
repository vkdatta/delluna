export const name="gender-female";
export const id="dl_8c833485648f4b69a1b3";
export const url=new URL("../icons/gender-female.svg?v=8bd7d223cc5c5d1e2624ecc68bc893a869c749017624d0693e88beb275fa4913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
