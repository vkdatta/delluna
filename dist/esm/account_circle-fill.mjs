export const name="account_circle-fill";
export const id="dl_6a7c21c7dd51c41a471c";
export const url=new URL("../icons/account_circle-fill.svg?v=29c6cc76e20fbb57486688b4636bd69a01ce417275237c3e715c8947f7691879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
