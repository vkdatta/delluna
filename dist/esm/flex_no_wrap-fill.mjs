export const name="flex_no_wrap-fill";
export const id="dl_ec935d33c68b57d626b8";
export const url=new URL("../icons/flex_no_wrap-fill.svg?v=aeaa806da927347ba7cb87e0b598de407cefe52db38a0b3a25b8f784b942a975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
