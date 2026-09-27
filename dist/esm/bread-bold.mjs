export const name="bread-bold";
export const id="dl_f498f39ccf9044908875";
export const url=new URL("../icons/bread-bold.svg?v=20b96377bd72b2855bc02c09da0b3ec37ddf99c969df79a8d7a2f57d593e93cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
