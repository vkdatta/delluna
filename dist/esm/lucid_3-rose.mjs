export const name="lucid_3-rose";
export const id="dl_94adbab717014cb0a3cf";
export const url=new URL("../icons/lucid_3-rose.svg?v=c0355c0d27d71aed9af9123cd5e1932b28981d202cf3dd22344a3ee9fdccc742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
