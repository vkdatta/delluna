export const name="cloud_lock";
export const id="dl_b893290affd54f5791c0";
export const url=new URL("../icons/C/cloud_lock.svg?v=aa94eb81d93314e3ae63bada2d2e1c009a17de0d7e97229d1aabe6c6d7c9c6e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
