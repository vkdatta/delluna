export const name="lucid_2-file-signal";
export const id="dl_2a9cf0bc79844ffa8059";
export const url=new URL("../icons/lucid_2-file-signal.svg?v=a1ee7a04de4ec14b1b5a97f2225e8a5d78b37d34bc1efd1716c3b271e4505992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
