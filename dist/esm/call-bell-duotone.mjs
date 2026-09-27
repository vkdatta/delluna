export const name="call-bell-duotone";
export const id="dl_0206e79940404bfca3f8";
export const url=new URL("../icons/call-bell-duotone.svg?v=8d83c9abb59dbd9f7a0cee306b58cc5566092d257cf762fa57400d125bb420b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
