export const name="hdr_on-fill";
export const id="dl_ffdf053686ad48e80b7d";
export const url=new URL("../icons/hdr_on-fill.svg?v=38b8f5d19efe820dc02702ce6939ad569bbe8a6f8b1dd5f5c7a5532f75b8536e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
