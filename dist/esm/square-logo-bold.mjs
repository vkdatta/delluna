export const name="square-logo-bold";
export const id="dl_3e8dc24d081b22187a47";
export const url=new URL("../icons/square-logo-bold.svg?v=138b6f2e514dfd0e134ba45e9689deda1e29c39d08bc675952e14904a80b7cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
