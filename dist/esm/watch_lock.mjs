export const name="watch_lock";
export const id="dl_1776cf3276fac8a799c4";
export const url=new URL("../icons/watch_lock.svg?v=4cd8cad5cfd64e5d488e0f7d3a3d92570c8d85e48067e1163bfa89f2c828fa90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
