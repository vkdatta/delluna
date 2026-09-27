export const name="device-tablet-duotone";
export const id="dl_4497d4ede1394a0eb29f";
export const url=new URL("../icons/device-tablet-duotone.svg?v=14028baacaaecbc2fbb2082b478e194b2e9811787b80d4f908cb7a40ad0537f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
