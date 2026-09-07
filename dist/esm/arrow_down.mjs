export const name="arrow_down";
export const id="dl_a2cad8be629345238e7f";
export const url=new URL("../icons/all_60_named_svgs/arrow_down.svg?v=4a920529cfb6e6bf8f0c385893ba4e1032f8c7d2a552c4faee2e27adcedfe957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
