export const name="minus-square-light";
export const id="dl_4f18ee5f6feb4f1c8647";
export const url=new URL("../icons/minus-square-light.svg?v=0852026b3ff70ed78bed52b1ec178ebaa52c790da6c617d70bd2078f7e7411ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
