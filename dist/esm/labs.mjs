export const name="labs";
export const id="dl_9f89493e59a64f4d85c8";
export const url=new URL("../icons/labs.svg?v=a43e446669897a0e8ec20d5d238f1d1a1c373c45d3f2e0588fc5c9e300f79d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
