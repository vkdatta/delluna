export const name="lucid_1-bell";
export const id="dl_521a72aff5d74cc5b20d";
export const url=new URL("../icons/lucid_1-bell.svg?v=9375c9ddac5379a59e759b1c498ee17d61936a6215383f9dc0fa262db09b39d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
