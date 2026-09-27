export const name="arrow-circle-down-bold";
export const id="dl_c8eb6d9f14ae4a0e8340";
export const url=new URL("../icons/arrow-circle-down-bold.svg?v=d60a36e03b81a4a557cfcfb6e11f4236bbdedd5545c7f1741a498a9d954aad52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
