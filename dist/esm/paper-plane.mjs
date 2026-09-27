export const name="paper-plane";
export const id="dl_61d24c265d784eaaad92";
export const url=new URL("../icons/paper-plane.svg?v=3c892e3b1d70a95b6432ee792add2969b07143ac0f07472aaef4c8fc083fe422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
