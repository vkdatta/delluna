export const name="nest_connect";
export const id="dl_58c4b7cf4185c6f88739";
export const url=new URL("../icons/nest_connect.svg?v=496b62df4b70a8650a951eb8c646aab10f665aaf25064fc546885ae6ae314e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
