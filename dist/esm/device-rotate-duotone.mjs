export const name="device-rotate-duotone";
export const id="dl_2f2a8c502dcf4075834e";
export const url=new URL("../icons/device-rotate-duotone.svg?v=e1a88bb439e90e9a00142cf6170051ed261cc91dfd6d0d86fc0de3567951d5c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
