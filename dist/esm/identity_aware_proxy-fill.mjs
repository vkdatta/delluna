export const name="identity_aware_proxy-fill";
export const id="dl_fe341759e245aa3a5306";
export const url=new URL("../icons/identity_aware_proxy-fill.svg?v=09e6ea14167efbfb97a89a3c3944836ec8758ac41010480b2c73a96e6ebaf26f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
