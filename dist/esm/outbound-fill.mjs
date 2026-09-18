export const name="outbound-fill";
export const id="dl_35865a6a0b074c2c950c";
export const url=new URL("../icons/outbound-fill.svg?v=877a91bd02cc5f826b2ee3d402f451c1634dcc44a616bf8de93a3eae7eec1d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
