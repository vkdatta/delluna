export const name="lucid_2-leaf";
export const id="dl_6dab8d5161f54b0bbbd1";
export const url=new URL("../icons/lucid_2-leaf.svg?v=b50cdc7cdfb4f99637ddffd8b6dfe6b6ebcaf8c6f4b26fc8512ba4da52779c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
