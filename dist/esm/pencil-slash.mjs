export const name="pencil-slash";
export const id="dl_fb8eefb8dba2458e8e0e";
export const url=new URL("../icons/pencil-slash.svg?v=1ed9769359acb51d2a940a45a977073a47ab6570176f04b2c674129f1e10326b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
