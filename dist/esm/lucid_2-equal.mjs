export const name="lucid_2-equal";
export const id="dl_bfcc1008268c4eaeb053";
export const url=new URL("../icons/lucid_2-equal.svg?v=1ed90a6e3a0e333fd8d59c18a7852d3a2c5f6b0192eb8d0654fa931fc1048a15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
