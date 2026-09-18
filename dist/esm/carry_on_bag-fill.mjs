export const name="carry_on_bag-fill";
export const id="dl_192ee4cd37624cc2bd29";
export const url=new URL("../icons/carry_on_bag-fill.svg?v=37779bfce00c3581898e1d27feaca52896dba3e9216b7afd325db28cc4acbcef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
