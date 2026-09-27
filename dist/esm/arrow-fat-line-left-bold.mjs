export const name="arrow-fat-line-left-bold";
export const id="dl_46247ad4da5545c6b97b";
export const url=new URL("../icons/arrow-fat-line-left-bold.svg?v=7acc43ad3b48766926284cbbdfbaea4ef99aaff6198404cda24873b0c62b4747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
