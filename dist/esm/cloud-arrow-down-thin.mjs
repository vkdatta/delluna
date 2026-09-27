export const name="cloud-arrow-down-thin";
export const id="dl_9f15e54869b74079a21e";
export const url=new URL("../icons/cloud-arrow-down-thin.svg?v=851642fef943550de89c2a2f6ad38aea0ea55c6a20c9d3e19fd90f30c224ccf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
