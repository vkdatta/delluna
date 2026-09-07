export const name="lucid_1-clipboard-plus";
export const id="dl_499c8a6441344eddb6bd";
export const url=new URL("../icons/lucid_1-clipboard-plus.svg?v=b636fda4b9310f1b1f2449b5ec0c416ea4a9cfc1e7a9b5d3300d1ca5f914184b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
