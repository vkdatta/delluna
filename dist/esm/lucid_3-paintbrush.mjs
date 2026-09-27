export const name="lucid_3-paintbrush";
export const id="dl_28b59e88f8544dde9e2e";
export const url=new URL("../icons/lucid_3-paintbrush.svg?v=6bfaf8607322db54771a67d841d3502d2da1126cf191c9926d4a6d81f0bfdc62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
