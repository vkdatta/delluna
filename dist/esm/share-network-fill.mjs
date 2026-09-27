export const name="share-network-fill";
export const id="dl_fccd4555b919f6caa2de";
export const url=new URL("../icons/share-network-fill.svg?v=c56223448171443cbd271f8be1750ed9bd9e0932eaccf9c76f0fde290f4212e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
