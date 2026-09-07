export const name="cloud-arrow-down-thin";
export const id="dl_9f15e54869b74079a21e";
export const url=new URL("../icons/cloud-arrow-down-thin.svg?v=611a7281fda85f0017b06f29111417681ba964c7a8624d7a8b7e359bbecd2c90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
