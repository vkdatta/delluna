export const name="arrows-in-line-vertical-duotone";
export const id="dl_2cf541486bae41b08da4";
export const url=new URL("../icons/arrows-in-line-vertical-duotone.svg?v=9348e2686f002c3e432e3dacd6050cdc1bd4d9915b841fc121e17f3ce5aaf6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
