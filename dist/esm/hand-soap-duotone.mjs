export const name="hand-soap-duotone";
export const id="dl_2377eda19f8045b29217";
export const url=new URL("../icons/hand-soap-duotone.svg?v=ee79ff2a17a4734f6f3908b09a34fd671117a99aff249e2c895265be754ce26d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
