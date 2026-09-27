export const name="castle-turret-fill";
export const id="dl_38560704b7c94d6583c5";
export const url=new URL("../icons/castle-turret-fill.svg?v=5c0dc5db632c3c89dfc0fd15fff5c9175a799ade249df5a5de0733f323a6f4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
