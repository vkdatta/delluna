export const name="text-align-center";
export const id="dl_1c0f0d09c8b645f4aa0c";
export const url=new URL("../icons/text-align-center.svg?v=b7794411d72c18ec5f20c3c7df4e7384479d9cc8f9a8b9f25d0ee15646cef2dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
