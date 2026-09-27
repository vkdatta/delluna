export const name="sync_arrow_up-fill";
export const id="dl_90c0b81b6f0bb6cc0bdb";
export const url=new URL("../icons/sync_arrow_up-fill.svg?v=8d02621f1696e235af482c2724582c8b6645c99d9db1ce18c7bb76669b807f75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
