export const name="compass-bold";
export const id="dl_9af24588d6f741818e53";
export const url=new URL("../icons/compass-bold.svg?v=d55a29d4a7efaac4901ed03cd0889dd6f742d0b240e5c0dab04d17cec0746f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
