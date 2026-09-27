export const name="child_care-fill";
export const id="dl_559510e0898198db2946";
export const url=new URL("../icons/child_care-fill.svg?v=e2a70ed3fde98d33dc584f234ea4f922fa9bb22d7240599cbda9ec55bce58a3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
