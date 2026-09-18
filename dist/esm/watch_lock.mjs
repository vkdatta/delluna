export const name="watch_lock";
export const id="dl_3524151f55d04edd888d";
export const url=new URL("../icons/watch_lock.svg?v=d8c9893dd97b87c24477c1febf1a6cca2684a35ed883428231984abc7a1dbc58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
