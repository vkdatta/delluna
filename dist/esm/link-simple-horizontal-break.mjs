export const name="link-simple-horizontal-break";
export const id="dl_6884bb6b9ecb431a9856";
export const url=new URL("../icons/link-simple-horizontal-break.svg?v=e34bdc218f234a48a6f09e945b3feae920f37c731fa63ad1197732a0ecdac2ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
