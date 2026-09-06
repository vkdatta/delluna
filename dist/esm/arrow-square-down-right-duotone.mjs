export const name="arrow-square-down-right-duotone";
export const id="dl_99d2799482104b54b23b";
export const url=new URL("../icons/arrow-square-down-right-duotone.svg?v=db5e9b16ffce7445061001603dda60a0a88863523e189b8f1544f89d3a5f3054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
