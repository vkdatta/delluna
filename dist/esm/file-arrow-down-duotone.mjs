export const name="file-arrow-down-duotone";
export const id="dl_a1f67b1bc7504039b31b";
export const url=new URL("../icons/file-arrow-down-duotone.svg?v=7f2c0548fa37584b244036410fc8e3923bf1cd1aa17bbef03aeb45dfecf44478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
