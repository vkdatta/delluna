export const name="local_post_office";
export const id="dl_fd456a12a33765019264";
export const url=new URL("../icons/local_post_office.svg?v=1245a88eb6bedbce66ba428d02ee9a9c1d4ce455ae8f182b8a99741f86966029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
