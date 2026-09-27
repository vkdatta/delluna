export const name="lucid_1-bell";
export const id="dl_521a72aff5d74cc5b20d";
export const url=new URL("../icons/lucid_1-bell.svg?v=f7d32e8111575f93351b48c4e1b954348489a3ac019db922b2b21c10bb7ad563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
