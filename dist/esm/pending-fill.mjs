export const name="pending-fill";
export const id="dl_63a4763d374431fcd919";
export const url=new URL("../icons/pending-fill.svg?v=2ad7b75739e68fa44196af4d26e91f61e04f5784c8a8615132c50ff4232f111d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
