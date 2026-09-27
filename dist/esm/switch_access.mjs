export const name="switch_access";
export const id="dl_0a0630bce33e258747e5";
export const url=new URL("../icons/switch_access.svg?v=c43560bfa19c73902a110764aefbabc4db30fc04e09f987ec7eab98bf59bc7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
