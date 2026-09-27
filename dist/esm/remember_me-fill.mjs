export const name="remember_me-fill";
export const id="dl_b1fb7d20a6eaaff57734";
export const url=new URL("../icons/remember_me-fill.svg?v=c996651c7d976d80e97a6f048d8584c4ea24dffb50ff8789c3866a16500443d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
