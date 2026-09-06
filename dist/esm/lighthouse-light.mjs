export const name="lighthouse-light";
export const id="dl_9a91adc80d0e471b89bb";
export const url=new URL("../icons/lighthouse-light.svg?v=a07ce43b5cd2c149b7c1390917185a61842814b777db28658b13984994698bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
