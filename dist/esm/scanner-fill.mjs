export const name="scanner-fill";
export const id="dl_59d2e997fc53d03b2169";
export const url=new URL("../icons/scanner-fill.svg?v=f04affcdd5ab4353c38715ba8fa61dc2af8c8655b976c6a76f8408b457ff589c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
