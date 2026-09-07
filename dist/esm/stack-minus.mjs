export const name="stack-minus";
export const id="dl_7d65d54454bd43878794";
export const url=new URL("../icons/S/stack-minus.svg?v=c0cd6f9359ecc107fa2194a6fa9f6d61871010e1657f7101ad43da8f8e7750b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
