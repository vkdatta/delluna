export const name="seal-check";
export const id="dl_bf203d5fa9dde306607c";
export const url=new URL("../icons/seal-check.svg?v=914a684ce9020cc19eb48367523069a84f795e69e28a21283adb8b8641eb693d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
